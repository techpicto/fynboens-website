"use client";

import { useState } from "react";

const carSizes = [
  "Lille bil (fx Polo, i10, Corsa)",
  "Mellem bil (fx Golf, Octavia)",
  "SUV / stationcar",
  "Stor bil / varevogn",
  "Flere biler (erhverv)",
];

const serviceOptions = [
  "Indvendig damprens",
  "Udvendig vask & voks",
  "Komplet klargøring",
  "Salgs-/leasingklargøring",
  "Erhvervsaftale / flåde",
  "Andet – se kommentar",
];

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-ink-soft/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-periwinkle";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
          Vi har modtaget din booking og kontakter dig hurtigst muligt – typisk
          inden for 24 timer.
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
    <form onSubmit={handleSubmit} className="space-y-5">
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder="din@mail.dk" className={inputClass} />
        </div>
        <div>
          <label htmlFor="address" className={labelClass}>
            Adresse (hvor bilen holder) *
          </label>
          <input id="address" name="address" required maxLength={300} placeholder="Vejnavn 1, 5000 Odense" className={inputClass} />
        </div>
      </div>

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
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Ønsket ydelse *
          </label>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Vælg ydelse
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="comment" className={labelClass}>
          Kommentar
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          maxLength={2000}
          placeholder="Fortæl gerne om bilens stand, særlige ønsker eller hvornår det passer dig bedst."
          className={inputClass}
        />
      </div>

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
        Forespørgslen er uforpligtende. Vi kontakter dig for at aftale tid og
        endelig pris.
      </p>
    </form>
  );
}
