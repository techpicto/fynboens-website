import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import StepList from "@/components/StepList";
import PriceCards from "@/components/PriceCards";
import FaqList from "@/components/FaqList";
import { Button, CheckItem, SectionHeader } from "@/components/ui";
import { faqs } from "@/lib/content";

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
    <div className="bg-cream">
      <PageHero
        eyebrow="Privat"
        title="Bilpleje hjemme hos dig"
        text="Slip for turen til vaskehallen. Vi renser din bil i indkørslen, mens du bruger tiden på noget bedre."
        buttonLabel="Book din tid"
      />

      {/* Fordele */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader eyebrow="Fordele" title="Derfor vælger private os" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`rounded-3xl p-8 ${
                i === 0 ? "bg-ink text-white" : "bg-white"
              }`}
            >
              <h3
                className={`font-display text-xl font-bold tracking-tight ${
                  i === 0 ? "text-white" : "text-ink"
                }`}
              >
                {benefit.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  i === 0 ? "text-cream/75" : "text-ink-soft"
                }`}
              >
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Situationer */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Kender du det?"
              title="Lyder det bekendt?"
            />
            <ul className="mt-8 space-y-3">
              {situations.map((situation) => (
                <CheckItem key={situation}>{situation}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-paper p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Mest populær
            </p>
            <h3 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
              Indvendig damprens
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Vores mest bookede ydelse. Sæder, måtter, loft og paneler
              dybderenses med damp, og bilen efterlades frisk og lugtfri.
            </p>
            <p className="mt-5 font-display text-5xl font-extrabold tracking-tight text-ink">
              899<span className="text-lg font-bold"> kr.</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
              fra-pris · inkl. moms og kørsel
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/kontakt">Book damprens</Button>
              <Button href="/priser" variant="outline-dark">
                Se alle priser
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeader
            eyebrow="Sådan foregår det"
            title="Nemt fra start til slut"
            description="Fire trin – og du skal kun være med i det første."
          />
          <Button href="/kontakt" className="mt-8">
            Book en tid
          </Button>
        </div>
        <StepList />
      </section>

      {/* Priser */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeader
            center
            eyebrow="Priser"
            title="Hvad koster det?"
            description="Faste fra-priser – den endelige pris afhænger kun af bilens størrelse."
          />
          <div className="mt-12">
            <PriceCards />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pt-20 sm:px-6">
        <SectionHeader center eyebrow="FAQ" title="Svar på dine spørgsmål" />
        <FaqList items={faqs} />
      </section>

      <PageCta
        title="Din bil fortjener det"
        text="Book en tid i dag – det tager kun 2 minutter, og vi kommer til dig."
      />
    </div>
  );
}
