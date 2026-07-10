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
        title={"Gennem­skuelige priser – ingen over­raskelser"}
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
          {/* Mobil: ét kort pr. pakke */}
          <div className="mt-12 space-y-4 md:hidden">
            {packageNames.map((name, i) => (
              <div
                key={name}
                className={`rounded-3xl p-6 ${
                  i === 1 ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {comparison.map((row) => (
                    <li key={row.feature} className="flex items-start gap-2.5 text-sm">
                      {row.included[i] ? (
                        <span className={`mt-0.5 shrink-0 ${i === 1 ? "text-periwinkle" : "text-ink"}`}>
                          <CheckIcon className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className={`w-4 shrink-0 text-center ${i === 1 ? "text-white/25" : "text-ink/20"}`}>
                          —
                        </span>
                      )}
                      <span
                        className={
                          row.included[i]
                            ? ""
                            : i === 1
                              ? "text-white/40"
                              : "text-ink/40"
                        }
                      >
                        {row.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tablet/desktop: sammenligningstabel */}
          <div className="mt-12 hidden overflow-x-auto rounded-3xl bg-white p-2 sm:p-6 md:block">
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
        {/* Mobil: ét kort pr. bilstørrelse */}
        <div className="mt-12 space-y-4 md:hidden">
          {sizePrices.map((row) => (
            <div key={row.size} className="rounded-3xl bg-white p-6">
              <h3 className="font-display text-base font-bold tracking-tight text-ink">
                {row.size}
              </h3>
              <dl className="mt-4 space-y-2.5">
                {packageNames.map((name, i) => (
                  <div key={name} className="flex items-center justify-between gap-4 text-sm">
                    <dt className="text-ink-soft">{name}</dt>
                    <dd className="font-display font-extrabold tracking-tight text-ink">
                      {row.prices[i]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Tablet/desktop: pristabel */}
        <div className="mt-12 hidden overflow-x-auto rounded-3xl bg-white p-2 sm:p-6 md:block">
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
