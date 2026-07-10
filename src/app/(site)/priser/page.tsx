import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import PriceCards from "@/components/PriceCards";
import { CheckIcon, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Faste og gennemskuelige priser på mobil bilrens, damprens og klargøring på Fyn. Se hvad det koster for din bilstørrelse.",
};

/* Sammenligning: hvad er med i hvilken pakke */
const comparison: { feature: string; included: [boolean, boolean, boolean] }[] = [
  { feature: "Skånsom håndvask", included: [true, false, true] },
  { feature: "Fælgrens og dækglans", included: [true, false, true] },
  { feature: "Hårdvoks med langtidsbeskyttelse", included: [true, false, true] },
  { feature: "Ruder pudset udvendigt", included: [true, false, true] },
  { feature: "Grundig støvsugning overalt", included: [false, true, true] },
  { feature: "Damprens af sæder, måtter og loft", included: [false, true, true] },
  { feature: "Rens af paneler, konsol og luftkanaler", included: [false, true, true] },
  { feature: "Lugtneutralisering", included: [false, true, true] },
  { feature: "Ruder pudset indvendigt", included: [false, true, true] },
  { feature: "Motorrumsrens ved behov", included: [false, false, true] },
];

const packageNames = ["Vask & voks", "Damprens", "Klargøring"];

const sizePrices = [
  { size: "Lille bil (fx Polo, i10, Corsa)", prices: ["599 kr.", "899 kr.", "1.799 kr."] },
  { size: "Mellem bil / SUV (fx Golf, Octavia)", prices: ["699 kr.", "1.099 kr.", "2.099 kr."] },
  { size: "Stor bil / varevogn", prices: ["849 kr.", "1.349 kr.", "2.499 kr."] },
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
    <div className="bg-cream">
      <PageHero
        eyebrow="Priser"
        title="Gennemskuelige priser – ingen overraskelser"
        text="Prisen afhænger kun af bilens størrelse og den ydelse, du vælger. Kørsel på Fyn er inkluderet."
        buttonLabel="Book din tid"
      />

      {/* Pakker */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader
          center
          eyebrow="Pakker"
          title="Vælg din pakke"
          description="Tre pakker, der dækker alt fra hurtig opfriskning til komplet klargøring."
        />
        <div className="mt-12">
          <PriceCards />
        </div>
      </section>

      {/* Sammenligning */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeader
            center
            eyebrow="Sammenligning"
            title="Hvad er med i pakken?"
          />
          <div className="mt-12 overflow-x-auto rounded-3xl bg-white p-2 sm:p-6">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
                    Ydelse
                  </th>
                  {packageNames.map((name, i) => (
                    <th
                      key={name}
                      className={`p-4 text-center font-display text-sm font-bold tracking-tight ${
                        i === 1 ? "rounded-t-2xl bg-ink text-white" : "text-ink"
                      }`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, rowIndex) => (
                  <tr key={row.feature} className="border-t border-line/60">
                    <td className="p-4 text-ink">{row.feature}</td>
                    {row.included.map((included, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center ${
                          i === 1
                            ? `bg-ink ${rowIndex === comparison.length - 1 ? "rounded-b-2xl" : ""}`
                            : ""
                        }`}
                      >
                        {included ? (
                          <span
                            className={`inline-flex ${i === 1 ? "text-periwinkle" : "text-ink"}`}
                          >
                            <CheckIcon />
                          </span>
                        ) : (
                          <span className={i === 1 ? "text-white/25" : "text-ink/20"}>
                            —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Priser pr. størrelse */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader
          center
          eyebrow="Bilstørrelse"
          title="Pris efter bilens størrelse"
          description="Alle priser er inkl. moms og kørsel på Fyn."
        />
        <div className="mt-12 overflow-x-auto rounded-3xl bg-white p-2 sm:p-6">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
                  Størrelse
                </th>
                {packageNames.map((name) => (
                  <th
                    key={name}
                    className="p-4 text-center font-display text-sm font-bold tracking-tight text-ink"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizePrices.map((row) => (
                <tr key={row.size} className="border-t border-line/60">
                  <td className="p-4 font-medium text-ink">{row.size}</td>
                  {row.prices.map((price, i) => (
                    <td
                      key={i}
                      className="p-4 text-center font-display text-base font-extrabold tracking-tight text-ink"
                    >
                      {price}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-ink-soft">
          Meget snavsede biler kan udløse et tillæg – det aftaler vi altid,
          inden vi går i gang.
        </p>
      </section>

      {/* Tilvalg */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <SectionHeader
            center
            eyebrow="Tilvalg"
            title="Gør det helt færdigt"
          />
          <div className="mt-10 space-y-3">
            {extras.map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 text-sm"
              >
                <span className="font-medium text-ink">{name}</span>
                <span className="font-display font-extrabold tracking-tight text-ink">
                  {price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            Erhverv med flere biler? Vi laver flådeaftaler med fast lav pris pr.
            bil – læs mere under Erhverv.
          </p>
        </div>
      </section>

      <PageCta
        title="Fandt du den rigtige pakke?"
        text="Book i dag – du kender prisen, før vi går i gang."
      />
    </div>
  );
}
