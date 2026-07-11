"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { carSizes, packages, type PackageId } from "@/lib/priser";

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-ink-soft/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-periwinkle";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink";

function timeOptions(startHour: number, endHour: number): string[] {
  const options: string[] = [];
  for (let h = startHour; h <= endHour; h++) {
    options.push(`${String(h).padStart(2, "0")}:00`);
  }
  return options;
}

const earliestStartOptions = timeOptions(7, 16);
const latestEndOptions = timeOptions(10, 20);

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [customerType, setCustomerType] = useState<"privat" | "erhverv">("privat");
  const [selectedPackage, setSelectedPackage] = useState<PackageId | "">("");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("pakke");
    if (param && packages.some((p) => p.id === param)) {
      setSelectedPackage(param as PackageId);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (
      typeof data.earliest_start === "string" &&
      typeof data.latest_end === "string" &&
      data.latest_end <= data.earliest_start
    ) {
      setStatus("error");
      setErrorMessage("„Senest afsluttet“ skal ligge efter „Tidligst start“.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Noget gik galt. Prøv igen.");
      }

      form.reset();
      setCustomerType("privat");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Noget gik galt. Prøv igen."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-ink p-10 text-center text-white">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-periwinkle text-ink">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-tight">
          Tak for din forespørgsel!
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
          Vi ringer til dig inden for 24 timer og bekræfter dag og tidsrum.
          Ved indvendig rens skal bilens døre kunne stå åbne, og vi skal kunne
          parkere ved bilen.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-bold text-periwinkle underline underline-offset-4"
        >
          Send en ny forespørgsel
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Kontaktoplysninger */}
      <div className="space-y-5">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
          Kontaktoplysninger
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Navn *
            </label>
            <input id="name" name="name" required maxLength={200} placeholder="Dit fulde navn" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Telefon *
            </label>
            <input id="phone" name="phone" type="tel" required maxLength={30} placeholder="12 34 56 78" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder="din@mail.dk" className={inputClass} />
        </div>
      </div>

      {/* Adresse */}
      <div className="space-y-5">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
          Adresse (hvor bilen holder)
        </h3>
        <div>
          <label htmlFor="address" className={labelClass}>
            Adresse *
          </label>
          <input id="address" name="address" required maxLength={300} placeholder="Vejnavn 1" className={inputClass} />
        </div>
        <div className="grid gap-5 sm:grid-cols-[1fr_2fr]">
          <div>
            <label htmlFor="postal_code" className={labelClass}>
              Postnummer *
            </label>
            <input
              id="postal_code"
              name="postal_code"
              required
              inputMode="numeric"
              maxLength={4}
              placeholder="5000"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>
              By *
            </label>
            <input id="city" name="city" required maxLength={100} placeholder="Odense" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Kundetype */}
      <div className="space-y-5">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
          Kundetype
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {(["privat", "erhverv"] as const).map((type) => (
            <label
              key={type}
              className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-semibold capitalize transition-colors ${
                customerType === type
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink-soft hover:border-ink/40"
              }`}
            >
              <input
                type="radio"
                name="customer_type"
                value={type}
                checked={customerType === type}
                onChange={() => setCustomerType(type)}
                className="sr-only"
              />
              {type}
            </label>
          ))}
        </div>

        {customerType === "erhverv" && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="company_name" className={labelClass}>
                Virksomhedsnavn *
              </label>
              <input
                id="company_name"
                name="company_name"
                required={customerType === "erhverv"}
                maxLength={200}
                placeholder="Firmanavn ApS"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="cvr" className={labelClass}>
                CVR *
              </label>
              <input
                id="cvr"
                name="cvr"
                required={customerType === "erhverv"}
                inputMode="numeric"
                maxLength={8}
                placeholder="12345678"
                className={inputClass}
              />
            </div>
          </div>
        )}
      </div>

      {/* Bil & ydelse */}
      <div className="space-y-5">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
          Bil & ydelse
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="car_size" className={labelClass}>
              Bilstørrelse *
            </label>
            <select id="car_size" name="car_size" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Vælg bilstørrelse
              </option>
              {carSizes.map((size) => (
                <option key={size.id} value={size.label}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="service" className={labelClass}>
              Ønsket pakke *
            </label>
            <select
              id="service"
              name="service"
              required
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value as PackageId)}
              className={inputClass}
            >
              <option value="" disabled>
                Vælg pakke
              </option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Ønsket tidspunkt */}
      <div className="space-y-5">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
          Ønsket tidspunkt
        </h3>
        <div>
          <label htmlFor="preferred_date" className={labelClass}>
            Ønsket dato *
          </label>
          <input
            id="preferred_date"
            name="preferred_date"
            type="date"
            required
            min={todayIso()}
            className={inputClass}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="earliest_start" className={labelClass}>
              Tidligst start *
            </label>
            <select id="earliest_start" name="earliest_start" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Vælg tidspunkt
              </option>
              {earliestStartOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="latest_end" className={labelClass}>
              Senest afsluttet *
            </label>
            <select id="latest_end" name="latest_end" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Vælg tidspunkt
              </option>
              {latestEndOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Kommentar */}
      <div>
        <label htmlFor="comment" className={labelClass}>
          Kommentar
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          maxLength={2000}
          placeholder="Fortæl gerne om bilens stand eller særlige ønsker."
          className={inputClass}
        />
      </div>

      {/* Vilkår */}
      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
        <input
          type="checkbox"
          name="terms_accepted"
          value="true"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-line text-ink focus:ring-periwinkle"
        />
        <span>
          Jeg accepterer{" "}
          <Link href="/vilkaar" target="_blank" className="font-semibold text-ink underline underline-offset-4">
            vilkår & betingelser
          </Link>{" "}
          *
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sender..." : "Send booking-forespørgsel"}
      </button>
      <p className="text-center text-xs text-ink-soft">
        Forespørgslen er uforpligtende. Vi ringer og bekræfter dag og tidsrum.
      </p>
    </form>
  );
}
