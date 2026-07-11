import { packages, getFromPrice } from "@/lib/priser";
import { Button } from "./ui";

/* Forside-teaser: viser laveste fra-pris pr. pakke (uden valgt bilstørrelse).
   Den interaktive, bilstørrelse-specifikke vælger findes på /priser. */
export default function PriceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
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
            {getFromPrice(pkg.id)}
            <span className="text-lg font-bold"> kr.</span>
          </p>
          <p
            className={`mt-1 text-xs uppercase tracking-wider ${
              pkg.highlight ? "text-cream/60" : "text-ink-soft"
            }`}
          >
            fra-pris · {pkg.tidsestimat} · inkl. moms og kørsel
          </p>
          <p
            className={`mt-4 flex-1 text-sm leading-relaxed ${
              pkg.highlight ? "text-cream/75" : "text-ink-soft"
            }`}
          >
            {pkg.note}
          </p>
          <Button
            href={`/kontakt?pakke=${pkg.id}`}
            variant={pkg.highlight ? "pastel" : "dark"}
            className="mt-7 px-6 py-3"
          >
            Book nu
          </Button>
        </div>
      ))}
    </div>
  );
}
