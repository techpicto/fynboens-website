import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";

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

export default function OmOsPage() {
  return (
    <>
      <PageHero
        eyebrow="Om os"
        title="Din lokale bilplejespecialist på Fyn"
        text="Fynboens Mobil Klargøring er bygget på en simpel idé: professionel bilpleje skal være nemt – derfor kommer vi til dig."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-brand-950">Vores historie</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
              <p>
                Det hele startede med en passion for biler og en irritation
                over, hvor besværligt det var at få lavet en ordentlig
                dybderens: aflevere bilen, vente en hel dag, hente den igen –
                og ofte til en pris, hvor man ikke vidste, hvad man fik.
              </p>
              <p>
                Derfor pakkede vi udstyret i en varevogn og gjorde det modsatte:
                Vi kommer til dig, du kender prisen på forhånd, og du kan selv
                se resultatet, inden vi kører.
              </p>
              <p>
                I dag hjælper vi både private og virksomheder over hele Fyn –
                fra enkeltrens af familiebilen til faste flådeaftaler. Fælles
                for det hele er fynsk grundighed og en aftale, man kan stole på.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-brand-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-brand-950">Vi dækker hele Fyn</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Odense, Svendborg, Nyborg, Middelfart, Assens, Faaborg, Kerteminde,
            Bogense, Ringe, Otterup – og alle landsbyerne imellem. Bor du lige
            uden for Fyn? Skriv alligevel, så finder vi ud af det.
          </p>
        </div>
      </section>

      <PageCta
        title="Skal vi også hjælpe dig?"
        text="Book en tid eller ring til os – vi glæder os til at give din bil den behandling, den fortjener."
      />
    </>
  );
}
