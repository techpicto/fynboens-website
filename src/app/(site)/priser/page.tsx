import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import PriceSelector from "@/components/PriceSelector";
import { CheckIcon, SectionHeader } from "@/components/ui";
import { packages, featureComparison, extras } from "@/lib/priser";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Faste og gennemskuelige priser på mobil bilrens, damprens og klargøring på Fyn. Vælg din bilstørrelse og se prisen med det samme.",
};

export default function PriserPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Priser"
        title={"Gennem­skuelige priser – ingen over­raskelser"}
        text="Vælg din bilstørrelse herunder, og se prisen for alle tre pakker med det samme. Kørsel på Fyn er inkluderet."
        buttonLabel="Book din tid"
      />

      {/* Pakker med live prisopdatering */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader
          center
          eyebrow="Pakker"
          title="Vælg din pakke"
          description="Tre pakker, der dækker alt fra hurtig opfriskning til komplet klargøring. Prisen opdateres, når du vælger bilstørrelse."
        />
        <div className="mt-12">
          <PriceSelector />
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
            {packages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 ${
                  i === 1 ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {pkg.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {featureComparison.map((row) => (
                    <li key={row.feature} className="flex items-start gap-2.5 text-sm">
                      {row.included[pkg.id] ? (
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
                          row.included[pkg.id]
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
                  {packages.map((pkg, i) => (
                    <th
                      key={pkg.id}
                      className={`p-4 text-center font-display text-sm font-bold tracking-tight ${
                        i === 1 ? "rounded-t-2xl bg-ink text-white" : "text-ink"
                      }`}
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, rowIndex) => (
                  <tr key={row.feature} className="border-t border-line/60">
                    <td className="p-4 text-ink">{row.feature}</td>
                    {packages.map((pkg, i) => (
                      <td
                        key={pkg.id}
                        className={`p-4 text-center ${
                          i === 1
                            ? `bg-ink ${rowIndex === featureComparison.length - 1 ? "rounded-b-2xl" : ""}`
                            : ""
                        }`}
                      >
                        {row.included[pkg.id] ? (
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
          <p className="mt-6 text-center text-sm text-ink-soft">
            Meget snavsede biler kan udløse et tillæg – det aftaler vi altid,
            inden vi går i gang.
          </p>
        </div>
      </section>

      {/* Tilvalg */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <SectionHeader center eyebrow="Tilvalg" title="Gør det helt færdigt" />
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
      </section>

      <PageCta
        title="Fandt du den rigtige pakke?"
        text="Book i dag – du kender prisen, før vi går i gang."
      />
    </div>
  );
}
