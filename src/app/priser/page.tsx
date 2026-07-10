import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Faste og gennemskuelige priser på mobil bilrens, damprens og klargøring på Fyn. Se hvad det koster for din bilstørrelse.",
};

const packages = [
  {
    name: "Udvendig vask & voks",
    prices: [
      ["Lille bil", "599 kr."],
      ["Mellem bil / SUV", "699 kr."],
      ["Stor bil / varevogn", "849 kr."],
    ],
    includes: [
      "Skånsom håndvask",
      "Fælgrens og dækglans",
      "Hårdvoks med langtidsbeskyttelse",
      "Ruder pudset udvendigt",
    ],
  },
  {
    name: "Indvendig damprens",
    highlight: true,
    prices: [
      ["Lille bil", "899 kr."],
      ["Mellem bil / SUV", "1.099 kr."],
      ["Stor bil / varevogn", "1.349 kr."],
    ],
    includes: [
      "Grundig støvsugning overalt",
      "Damprens af sæder, måtter og loft",
      "Rens af paneler, konsol og luftkanaler",
      "Lugtneutralisering",
      "Ruder pudset indvendigt",
    ],
  },
  {
    name: "Komplet klargøring",
    prices: [
      ["Lille bil", "1.799 kr."],
      ["Mellem bil / SUV", "2.099 kr."],
      ["Stor bil / varevogn", "2.499 kr."],
    ],
    includes: [
      "Alt fra udvendig vask & voks",
      "Alt fra indvendig damprens",
      "Motorrumsrens ved behov",
      "Perfekt til salg eller leasing-aflevering",
    ],
  },
];

const extras = [
  ["Polering af lak (pr. bil)", "fra 1.500 kr."],
  ["Fjernelse af hundehår", "fra 200 kr."],
  ["Ozonbehandling mod røg/lugt", "fra 350 kr."],
  ["Rens af barnestol", "150 kr."],
  ["Læderpleje af sæder", "fra 300 kr."],
];

export default function PriserPage() {
  return (
    <>
      <PageHero
        eyebrow="Priser"
        title="Gennemskuelige priser – ingen overraskelser"
        text="Prisen afhænger kun af bilens størrelse og den ydelse, du vælger. Kørsel på Fyn er inkluderet."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl border p-7 shadow-sm ${
                pkg.highlight
                  ? "border-accent-500 bg-accent-50 ring-2 ring-accent-500"
                  : "border-slate-200 bg-white"
              }`}
            >
              {pkg.highlight && (
                <span className="mb-3 self-start rounded-full bg-accent-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Mest populær
                </span>
              )}
              <h2 className="text-xl font-bold text-brand-950">{pkg.name}</h2>
              <div className="mt-4 space-y-2">
                {pkg.prices.map(([size, price]) => (
                  <div
                    key={size}
                    className="flex items-center justify-between rounded-lg bg-white/70 px-4 py-2.5 text-sm ring-1 ring-slate-100"
                  >
                    <span className="text-slate-600">{size}</span>
                    <span className="font-bold text-brand-800">{price}</span>
                  </div>
                ))}
              </div>
              <ul className="mt-5 flex-1 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-accent-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? "bg-accent-600 text-white hover:bg-accent-700"
                    : "bg-brand-700 text-white hover:bg-brand-800"
                }`}
              >
                Book {pkg.name.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-brand-950">Tilvalg</h2>
          <div className="mt-5 divide-y divide-slate-200">
            {extras.map(([name, price]) => (
              <div key={name} className="flex items-center justify-between py-3 text-sm">
                <span className="text-slate-700">{name}</span>
                <span className="font-semibold text-brand-800">{price}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Alle priser er inkl. moms og kørsel på Fyn. Meget snavsede biler kan
            udløse et tillæg – det aftaler vi altid, inden vi går i gang.
            Erhverv: se <Link href="/erhverv" className="font-semibold text-brand-700 hover:underline">erhvervssiden</Link> for
            flådeaftaler og mængderabat.
          </p>
        </div>
      </section>

      <PageCta />
    </>
  );
}
