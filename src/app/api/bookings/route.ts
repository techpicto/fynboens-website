import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { packages } from "@/lib/priser";

const requiredFields = [
  "name",
  "phone",
  "email",
  "address",
  "postal_code",
  "city",
  "customer_type",
  "car_size",
  "service",
  "preferred_date",
  "earliest_start",
  "latest_end",
] as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørgsel." }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const field of requiredFields) {
    const value = body[field];
    if (typeof value !== "string" || !value.trim()) {
      return NextResponse.json(
        { error: "Udfyld venligst alle påkrævede felter." },
        { status: 400 }
      );
    }
    values[field] = value.trim().slice(0, 500);
  }

  if (values.customer_type !== "privat" && values.customer_type !== "erhverv") {
    return NextResponse.json({ error: "Ugyldig kundetype." }, { status: 400 });
  }

  if (values.latest_end <= values.earliest_start) {
    return NextResponse.json(
      { error: "„Senest afsluttet“ skal ligge efter „Tidligst start“." },
      { status: 400 }
    );
  }

  if (body.terms_accepted !== "true") {
    return NextResponse.json(
      { error: "Du skal acceptere vilkår & betingelser." },
      { status: 400 }
    );
  }

  let companyName: string | null = null;
  let cvr: string | null = null;
  if (values.customer_type === "erhverv") {
    const companyNameRaw = body.company_name;
    const cvrRaw = body.cvr;
    if (typeof companyNameRaw !== "string" || !companyNameRaw.trim()) {
      return NextResponse.json(
        { error: "Udfyld venligst virksomhedsnavn." },
        { status: 400 }
      );
    }
    if (typeof cvrRaw !== "string" || !/^\d{8}$/.test(cvrRaw.trim())) {
      return NextResponse.json(
        { error: "CVR skal bestå af 8 cifre." },
        { status: 400 }
      );
    }
    companyName = companyNameRaw.trim().slice(0, 200);
    cvr = cvrRaw.trim();
  }

  const comment =
    typeof body.comment === "string" && body.comment.trim()
      ? body.comment.trim().slice(0, 2000)
      : null;

  const packageName =
    packages.find((p) => p.id === values.service)?.name ?? values.service;

  // Gem i Supabase (service role — tabellen har RLS uden anon-adgang)
  try {
    const supabase = getSupabaseAdmin();
    const { error: dbError } = await supabase.from("bookings").insert({
      name: values.name,
      phone: values.phone,
      email: values.email,
      address: values.address,
      postal_code: values.postal_code,
      city: values.city,
      customer_type: values.customer_type,
      company_name: companyName,
      cvr,
      car_size: values.car_size,
      service: packageName,
      preferred_date: values.preferred_date,
      earliest_start: values.earliest_start,
      latest_end: values.latest_end,
      comment,
      terms_accepted: true,
    });
    if (dbError) throw dbError;
  } catch (error) {
    console.error("Supabase insert fejlede:", error);
    return NextResponse.json(
      { error: "Kunne ikke gemme forespørgslen. Prøv igen eller ring til os." },
      { status: 500 }
    );
  }

  // Send notifikationsmail — må ikke vælte bookingen, hvis den fejler
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const to = process.env.BOOKING_NOTIFY_EMAIL || "kontakt@fynboensmobilklargoering.dk";
      const from =
        process.env.BOOKING_FROM_EMAIL ||
        "Fynboens Mobil Klargøring <onboarding@resend.dev>";

      const rows: [string, string][] = [
        ["Navn", values.name],
        ["Telefon", values.phone],
        ["E-mail", values.email],
        ["Adresse", `${values.address}, ${values.postal_code} ${values.city}`],
        ["Kundetype", values.customer_type === "erhverv" ? "Erhverv" : "Privat"],
        ...(values.customer_type === "erhverv"
          ? ([
              ["Virksomhed", companyName ?? "—"],
              ["CVR", cvr ?? "—"],
            ] as [string, string][])
          : []),
        ["Bilstørrelse", values.car_size],
        ["Ønsket pakke", packageName],
        ["Ønsket dato", values.preferred_date],
        ["Tidsvindue", `${values.earliest_start} – ${values.latest_end}`],
        ["Kommentar", comment ?? "—"],
      ];

      await resend.emails.send({
        from,
        to,
        replyTo: values.email,
        subject: `Ny booking: ${packageName} – ${values.name}`,
        html: `
          <h2>Ny booking-forespørgsel</h2>
          <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            ${rows
              .map(
                ([label, value]) =>
                  `<tr><td style="font-weight:bold;border:1px solid #ddd">${label}</td><td style="border:1px solid #ddd">${escapeHtml(value)}</td></tr>`
              )
              .join("")}
          </table>
          <p style="font-family:sans-serif;font-size:13px;color:#666">
            Sendt automatisk fra hjemmesiden. Se alle forespørgsler under /admin.
          </p>
        `,
      });
    } else {
      console.warn("RESEND_API_KEY mangler – notifikationsmail blev ikke sendt.");
    }
  } catch (mailError) {
    console.error("Resend-mail fejlede:", mailError);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
