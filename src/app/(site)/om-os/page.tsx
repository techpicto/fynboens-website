import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import { Badge, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Om os",
  description:
    "Mød Fynboens Mobil Klargøring – din lokale specialist i mobil bilrens og damprens på Fyn.",
};

const values = [
  {
    title: "Grundighed",
    text: "Vi springer ikke over, hvor gærdet er lavest. Hver bil gennemgås systematisk – også de steder, man ikke lige ser.",
  },
  {
    title: "Ærlighed",
    text: "Du får en fast pris på forhånd, og kan en plet ikke fjernes helt, siger vi det, som det er.",
  },
  {
    title: "Fleksibilitet",
    text: "Vi tilpasser os din hverdag – tidlig morgen, aften eller weekend. Det er hele pointen med at være mobil.",
  },
];

const cities = [
  "Odense",
  "Svendborg",
  "Nyborg",
  "Middelfart",
  "Assens",
  "Faaborg",
  "Kerteminde",
  "Bogense",
  "Ringe",
  "Otterup",
];

export default function OmOsPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Om os"
        title={"Din lokale bilpleje­specialist på Fyn"}
        text="Fynboens Mobil Klargøring er bygget på en simpel idé: professionel bilpleje skal være nemt – derfor kommer vi til dig."
        buttonLabel="Book din tid"
      />

      {/* Historie — redaktionel billed/tekst-sektion */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl bg-gradient-to-br from-periwinkle via-sand to-cream p-5">
          <Badge>Foto af os og vognen på vej</Badge>
        </div>
        <div>
          <SectionHeader eyebrow="Vores historie" title="Hvorfor vi kører ud" />
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            <p>
              Det hele startede med en passion for biler og en irritation over,
              hvor besværligt det var at få lavet en ordentlig dybderens:
              aflevere bilen, vente en hel dag, hente den igen – og ofte til en
              pris, hvor man ikke vidste, hvad man fik.
            </p>
            <p>
              Derfor pakkede vi udstyret i en varevogn og gjorde det modsatte:
              Vi kommer til dig, du kender prisen på forhånd, og du kan selv se
              resultatet, inden vi kører.
            </p>
          </div>
        </div>
      </section>

      {/* Værdier */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeader
            center
            eyebrow="Værdier"
            title="Det kan du regne med"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`rounded-3xl p-8 ${
                  i === 1 ? "bg-ink text-white" : "bg-white"
                }`}
              >
                <h3
                  className={`font-display text-xl font-bold tracking-tight ${
                    i === 1 ? "text-white" : "text-ink"
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    i === 1 ? "text-cream/75" : "text-ink-soft"
                  }`}
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I dag — omvendt billed/tekst-sektion */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div className="md:order-2">
          <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl bg-gradient-to-br from-paper via-periwinkle/40 to-periwinkle p-5">
            <Badge>Foto fra en klargøring på vej</Badge>
          </div>
        </div>
        <div className="md:order-1">
          <SectionHeader
            eyebrow="I dag"
            title="Private og virksomheder i hele landsdelen"
            description="I dag hjælper vi både private og virksomheder over hele Fyn – fra enkeltrens af familiebilen til faste flådeaftaler. Fælles for det hele er fynsk grundighed og en aftale, man kan stole på."
          />
        </div>
      </section>

      {/* Dækningsområde */}
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <SectionHeader
            center
            eyebrow="Dækningsområde"
            title="Vi dækker hele Fyn"
            description="Og alle landsbyerne imellem. Bor du lige uden for Fyn? Skriv alligevel, så finder vi ud af det."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <span
                key={city}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Skal vi også hjælpe dig?"
        text="Book en tid eller ring til os – vi glæder os til at give din bil den behandling, den fortjener."
      />
    </div>
  );
}
