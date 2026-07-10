import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import StepList from "@/components/StepList";
import { Button, CheckIcon, SectionHeader } from "@/components/ui";

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
    <div className="bg-cream">
      <PageHero
        eyebrow="Erhverv"
        title="Rene firmabiler – uden at de holder stille"
        text="Vi kommer til jer og klargør bilerne på stedet. Faste aftaler, faste priser og samlet faktura."
        buttonLabel="Anmod om tilbud"
      />

      {/* Målgrupper */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader eyebrow="Brancher" title="Hvem hjælper vi?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {audiences.map((audience) => (
            <div key={audience.title} className="rounded-3xl bg-white p-8">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {audience.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fordele — stor mørk sektion */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-2 md:items-center">
            <SectionHeader
              dark
              eyebrow="Flådeaftaler"
              title="Fordele ved en fast aftale"
              description="Jo flere biler og jo fastere rytme, desto bedre pris. Vi bygger aftalen om jeres hverdag – ikke omvendt."
            />
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3.5 text-sm font-medium"
                >
                  <span className="shrink-0 text-periwinkle">
                    <CheckIcon />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeader
              eyebrow="Sådan foregår det"
              title="Fra forespørgsel til fast aftale"
              description="Send en forespørgsel med antal biler og ønsket interval – vi vender tilbage med en fast pris inden for 24 timer."
            />
            <Button href="/kontakt" className="mt-8">
              Anmod om erhvervstilbud
            </Button>
          </div>
          <StepList />
        </div>
      </section>

      {/* Tilbudskort */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid items-center gap-8 rounded-3xl bg-paper p-8 sm:p-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Uforpligtende"
              title="Få et tilbud på jeres flåde"
              description="Fortæl os hvor mange biler I har, og hvor ofte de skal renses – så vender vi tilbage med en fast pris inden for 24 timer."
            />
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button href="/kontakt">Anmod om tilbud</Button>
            <Button href="/priser" variant="outline-dark">
              Se vejledende priser
            </Button>
          </div>
        </div>
      </section>

      <PageCta
        title="Lad os tage en snak om jeres biler"
        text="Send en forespørgsel i dag – vi svarer typisk inden for 24 timer."
        buttonLabel="Kontakt os"
      />
    </div>
  );
}
