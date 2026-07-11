"use client";

import { useState } from "react";
import Link from "next/link";
import { carSizes, packages, getPrice, type CarSizeId } from "@/lib/priser";

/* Bilstørrelse-dropdown der opdaterer de tre pakkekort live. */
export default function PriceSelector() {
  const [size, setSize] = useState<CarSizeId>(carSizes[0].id);

  return (
    <div>
      <div className="mx-auto max-w-sm">
        <label
          htmlFor="car-size-select"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-soft"
        >
          Vælg din bilstørrelse
        </label>
        <select
          id="car-size-select"
          value={size}
          onChange={(e) => setSize(e.target.value as CarSizeId)}
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-periwinkle"
        >
          {carSizes.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex flex-col rounded-3xl p-8 ${
              pkg.highlight ? "bg-ink text-white" : "bg-white text-ink"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                pkg.highlight ? "text-periwinkle" : "text-ink-soft"
              }`}
            >
              {pkg.name}
            </p>
            <p className="mt-3 font-display text-5xl font-extrabold tracking-tight">
              {getPrice(size, pkg.id)}
              <span className="text-lg font-bold"> kr.</span>
            </p>
            <p
              className={`mt-1 text-xs uppercase tracking-wider ${
                pkg.highlight ? "text-cream/60" : "text-ink-soft"
              }`}
            >
              {pkg.tidsestimat} · inkl. moms og kørsel
            </p>
            <p
              className={`mt-4 flex-1 text-sm leading-relaxed ${
                pkg.highlight ? "text-cream/75" : "text-ink-soft"
              }`}
            >
              {pkg.note}
            </p>
            <Link
              href={`/kontakt?pakke=${pkg.id}`}
              className={`mt-7 inline-block rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-wide transition-colors ${
                pkg.highlight
                  ? "bg-periwinkle text-ink hover:bg-periwinkle-deep"
                  : "bg-ink text-white hover:bg-ink/85"
              }`}
            >
              Book nu
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
