import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

const requiredFields = [
  "name",
  "phone",
  "email",
  "address",
  "car_size",
  "service",
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

  const comment =
    typeof body.comment === "string" && body.comment.trim()
      ? body.comment.trim().slice(0, 2000)
      : null;

  // Gem i Supabase (service role — tabellen har RLS uden anon-adgang)
  try {
    const supabase = getSupabaseAdmin();
    const { error: dbError } = await supabase.from("bookings").insert({
      name: values.name,
      phone: values.phone,
      email: values.email,
      address: values.address,
      car_size: values.car_size,
      service: values.service,
      comment,
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
        ["Adresse", values.address],
        ["Bilstørrelse", values.car_size],
        ["Ønsket ydelse", values.service],
        ["Kommentar", comment ?? "—"],
      ];

      await resend.emails.send({
        from,
        to,
        replyTo: values.email,
        subject: `Ny booking: ${values.service} – ${values.name}`,
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
