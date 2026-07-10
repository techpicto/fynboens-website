import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import { Badge, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Før & efter",
  description:
    "Se før- og efter-billeder af vores mobile bilrens og klargøring på Fyn. Resultaterne taler for sig selv.",
};

const cases = [
  {
    title: "Familiebil med pletter og krummer",
    service: "Indvendig damprens",
    text: "Års opsamlet snavs fra børnesæder, spildt saftevand og krummer i alle sprækker – væk efter en grundig damprens.",
  },
  {
    title: "Håndværkerbil efter 3 år uden rens",
    service: "Komplet klargøring",
    text: "Støv, mørtel og kaffepletter i førerhuset. Efter klargøring lignede den en bil, der lige var hentet hos forhandleren.",
  },
  {
    title: "Hundehår og lugt i stationcar",
    service: "Damprens + ozonbehandling",
    text: "Hundehår i alle tekstiler og en tydelig lugt. Efter behandling: hårfri kabine og neutral, frisk luft.",
  },
  {
    title: "Salgsklargøring af brugt SUV",
    service: "Komplet klargøring + polering",
    text: "Mat lak og træt kabine. Efter polering og dybderens blev bilen solgt på fire dage – til prisen.",
  },
  {
    title: "Leasingbil før aflevering",
    service: "Komplet klargøring",
    text: "Ejeren undgik ekstraregning ved afleveringen, fordi bilen stod som ved udleveringen.",
  },
  {
    title: "Røglugt i ældre personbil",
    service: "Damprens + ozonbehandling",
    text: "Mange års røg i kabinen. Efter damprens og ozon var lugten væk – bekræftet af en skeptisk svigermor.",
  },
];

export default function FoerEfterPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Før & efter"
        title="Resultater der taler for sig selv"
        text="Et udpluk af de biler, vi har haft under behandling. Egne billeder er på vej – her er historierne bag."
        buttonLabel="Book din tid"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader eyebrow="Galleri" title="Udvalgte opgaver" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-3xl bg-white"
            >
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="relative flex aspect-square items-end rounded-2xl bg-gradient-to-br from-line to-sand p-3">
                  <Badge>Før</Badge>
                </div>
                <div className="relative flex aspect-square items-end rounded-2xl bg-gradient-to-br from-periwinkle to-periwinkle-deep p-3">
                  <Badge>Efter</Badge>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-full bg-periwinkle/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
                  {item.service}
                </span>
                <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Billeder af faktiske opgaver uploades løbende. Følg med her på siden.
        </p>
      </section>

      <PageCta
        title="Skal din bil være den næste?"
        text="Book en tid – og oplev selv forskellen."
      />
    </div>
  );
}
