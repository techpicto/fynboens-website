import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";

export const metadata: Metadata = {
  title: "Privat bilrens",
  description:
    "Mobil bilrens og damprens for private på Fyn. Vi kommer hjem til dig med alt udstyr – book nemt online.",
};

const benefits = [
  {
    title: "Vi kommer til dig",
    text: "Hjemme i indkørslen, ved sommerhuset eller på din arbejdsplads. Du skal hverken køre, vente eller hente.",
  },
  {
    title: "Alt udstyr medbringes",
    text: "Vand, strøm, damprenser og professionelle plejemidler – du skal ingenting stille til rådighed.",
  },
  {
    title: "Damprens i dybden",
    text: "Damp løsner snavs og pletter i sæder, loft og paneler og fjerner lugt uden aggressive kemikalier.",
  },
  {
    title: "Skånsomt for familien",
    text: "Kemikaliefri dybderens er ideel til familier med børn, allergikere og kæledyr.",
  },
];

const situations = [
  "Bilen trænger bare til en kærlig hånd",
  "Børnene har spildt – igen",
  "Hunden har sat hår og lugt i sæderne",
  "Bilen skal sælges og skal stå skarpt",
  "Leasingbilen skal afleveres uden ekstraregning",
  "Du vil forkæle en du holder af med et gavekort",
];

export default function PrivatPage() {
  return (
    <>
      <PageHero
        eyebrow="Privat"
        title="Bilpleje hjemme hos dig"
        text="Slip for turen til vaskehallen. Vi renser din bil i indkørslen, mens du bruger tiden på noget bedre."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-brand-950">
          Derfor vælger private os
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-brand-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {benefit.text}
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
                Lyder det bekendt?
              </h2>
              <ul className="mt-6 space-y-3">
                {situations.map((situation) => (
                  <li key={situation} className="flex gap-3 text-slate-700">
                    <span className="mt-0.5 text-accent-600">✓</span>
                    {situation}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-900">
                Populært valg: Indvendig damprens
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Vores mest bookede ydelse. Sæder, måtter, loft og paneler
                dybderenses med damp, og bilen efterlades frisk og lugtfri.
              </p>
              <p className="mt-4 text-2xl font-extrabold text-brand-800">
                fra 899 kr.
              </p>
              <Link
                href="/kontakt"
                className="mt-5 block rounded-full bg-accent-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-700"
              >
                Book damprens
              </Link>
              <Link
                href="/priser"
                className="mt-3 block text-center text-sm font-semibold text-brand-700 hover:underline"
              >
                Se alle priser →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Din bil fortjener det"
        text="Book en tid i dag – det tager kun 2 minutter, og vi kommer til dig."
      />
    </>
  );
}
