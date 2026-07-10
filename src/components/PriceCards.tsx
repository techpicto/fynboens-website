import { priceTeasers } from "@/lib/content";
import { Button } from "./ui";

export default function PriceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {priceTeasers.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col rounded-3xl p-8 ${
            item.highlight ? "bg-ink text-white" : "bg-white text-ink"
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              item.highlight ? "text-periwinkle" : "text-ink-soft"
            }`}
          >
            {item.name}
          </p>
          <p className="mt-3 font-display text-5xl font-extrabold tracking-tight">
            {item.price}
            <span className="text-lg font-bold"> kr.</span>
          </p>
          <p
            className={`mt-1 text-xs uppercase tracking-wider ${
              item.highlight ? "text-cream/60" : "text-ink-soft"
            }`}
          >
            fra-pris · inkl. moms og kørsel
          </p>
          <p
            className={`mt-4 flex-1 text-sm leading-relaxed ${
              item.highlight ? "text-cream/75" : "text-ink-soft"
            }`}
          >
            {item.note}
          </p>
          <Button
            href="/kontakt"
            variant={item.highlight ? "pastel" : "dark"}
            className="mt-7 px-6 py-3"
          >
            Book nu
          </Button>
        </div>
      ))}
    </div>
  );
}
