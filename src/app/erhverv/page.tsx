import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";

export const metadata: Metadata = {
  title: "Erhverv & flådeaftaler",
  description:
    "Mobil bilrens for virksomheder på Fyn. Faste flådeaftaler, rens på jeres adresse og samlet fakturering – også med EAN.",
};

const audiences = [
  {
    title: "Håndværkere & servicebiler",
    text: "Varevognen er jeres ansigt udadtil. Vi holder den præsentabel med faste intervaller – uden at den holder stille i arbejdstiden.",
  },
  {
    title: "Bilforhandlere",
    text: "Salgsklargøring der får bilerne til at sælge sig selv. Vi klargør direkte på jeres plads, enkeltvis eller i faste ugentlige aftaler.",
  },
  {
    title: "Firmabiler & sælgere",
    text: "Medarbejdere med kundekontakt skal køre i en ren bil. Vi renser på kontorets parkeringsplads, mens de arbejder.",
  },
  {
    title: "Leasing & udlejning",
    text: "Returklargøring der minimerer ekstraregninger, og hurtig klargøring mellem lejemål.",
  },
];

const perks = [
  "Fast lav pris pr. bil ved aftale om flere biler",
  "Vi kommer på jeres adresse – også uden for normal arbejdstid",
  "Samlet månedlig faktura, EAN understøttes",
  "Fast kontaktperson og fleksibel planlægning",
  "Ingen binding – aftalen kan opsiges løbende",
];

export default function ErhvervPage() {
  return (
    <>
      <PageHero
        eyebrow="Erhverv"
        title="Rene firmabiler – uden at de holder stille"
        text="Vi kommer til jer og klargør bilerne på stedet. Faste aftaler, faste priser og samlet faktura."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-brand-950">
          Hvem hjælper vi?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-brand-900">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {audience.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-950">
                Fordele ved en fast aftale
              </h2>
              <ul className="mt-6 space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-slate-700">
                    <span className="mt-0.5 text-accent-600">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold">Få et uforpligtende tilbud</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                Fortæl os hvor mange biler I har, og hvor ofte de skal renses –
                så vender vi tilbage med en fast pris inden for 24 timer.
              </p>
              <Link
                href="/kontakt"
                className="mt-6 block rounded-full bg-accent-500 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-400"
              >
                Anmod om erhvervstilbud
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Lad os tage en snak om jeres biler"
        text="Send en forespørgsel i dag – vi svarer typisk inden for 24 timer."
      />
    </>
  );
}
