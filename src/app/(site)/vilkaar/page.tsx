import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vilkår & betingelser",
  description:
    "Handelsbetingelser, afbestillingsregler og privatlivspolitik for Fynboens Mobil Klargøring.",
};

export default function VilkaarPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Vilkår"
        title="Vilkår & betingelser"
        text="Handelsbetingelser, afbestillingsregler og privatlivspolitik for Fynboens Mobil Klargøring."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        {/* Handelsbetingelser */}
        <SectionHeader eyebrow="Del 1" title="Handelsbetingelser" />
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink-soft">
          <p>
            Disse betingelser gælder for alle aftaler om køb af rengørings- og
            klargøringsydelser hos Fynboens Mobil Klargøring
            (&quot;vi&quot;, &quot;os&quot;), CVR-nr. [udfyldes], indgået via
            hjemmesiden, telefonisk eller pr. e-mail.
          </p>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Booking og aftale
            </h3>
            <p className="mt-2">
              En booking er bindende, når du har modtaget en bekræftelse fra
              os på e-mail eller sms. Prisen, du får oplyst ved bookingen, er
              den endelige pris for den valgte ydelse og bilstørrelse, med
              mindre andet aftales på stedet – f.eks. ved usædvanligt
              tilsmudsede biler.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Udførelse af arbejdet
            </h3>
            <p className="mt-2">
              Vi udfører arbejdet på den aftalte adresse og medbringer selv
              alt nødvendigt udstyr, med mindre andet er aftalt. Du skal sikre
              rimelig adgang til bilen samt adgang til strøm og vand, hvis det
              er aftalt som en forudsætning for opgaven.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Betaling
            </h3>
            <p className="mt-2">
              Du betaler først, når arbejdet er udført til din tilfredshed.
              Private kunder betaler typisk med MobilePay eller kort på
              stedet. Erhvervskunder kan få tilsendt en faktura efter
              nærmere aftale.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Reklamation
            </h3>
            <p className="mt-2">
              Er du ikke tilfreds med resultatet, skal du gøre indsigelse på
              stedet, så vi har mulighed for at udbedre det med det samme.
              Henvendelser efter besøget behandles individuelt – kontakt os
              hurtigst muligt og senest 48 timer efter udført arbejde.
            </p>
          </div>
        </div>

        {/* Afbestilling */}
        <div className="mt-16">
          <SectionHeader eyebrow="Del 2" title="Afbestillingsregler" />
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink-soft">
            <p>
              Du kan afbestille eller flytte din booking uden beregning, hvis
              det sker <strong className="text-ink">senest 24 timer</strong>{" "}
              før det aftalte tidspunkt.
            </p>
            <p>
              Ved afbestilling mindre end 24 timer før aftalt tid, eller hvis
              vi ikke kan få adgang til bilen på det aftalte tidspunkt, kan vi
              opkræve et gebyr på op til 300 kr. til dækning af forgæves
              kørsel og afsat tid.
            </p>
            <p>
              Afbestilling skal ske telefonisk eller pr. e-mail til de
              kontaktoplysninger, der fremgår af bekræftelsesmailen og
              hjemmesidens footer.
            </p>
          </div>
        </div>

        {/* Privatlivspolitik */}
        <div className="mt-16">
          <SectionHeader eyebrow="Del 3" title="Privatlivspolitik" />
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink-soft">
            <p>
              Når du booker en ydelse hos os, indsamler vi de
              personoplysninger, du selv oplyser i booking-formularen: navn,
              telefonnummer, e-mailadresse, adresse samt oplysninger om bilen
              og den ønskede ydelse.
            </p>
            <div>
              <h3 className="font-display text-base font-bold tracking-tight text-ink">
                Formål og opbevaring
              </h3>
              <p className="mt-2">
                Oplysningerne bruges udelukkende til at bekræfte, planlægge og
                udføre den aftalte opgave, samt til eventuel efterfølgende
                kundeservice og bogføring. Oplysningerne opbevares, så længe
                det er nødvendigt af hensyn til formålet og gældende
                bogføringslovgivning, og slettes herefter.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-bold tracking-tight text-ink">
                Videregivelse
              </h3>
              <p className="mt-2">
                Dine oplysninger videregives ikke til tredjepart, bortset fra
                de databehandlere, vi bruger til at drive hjemmesiden og
                sende bekræftelsesmails (booking- og hostingleverandører), og
                kun i det omfang det er nødvendigt for at levere ydelsen.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-bold tracking-tight text-ink">
                Dine rettigheder
              </h3>
              <p className="mt-2">
                Du har til enhver tid ret til at få indsigt i, rettet eller
                slettet de oplysninger, vi har registreret om dig. Kontakt os
                på kontakt@fynboensmobilklargoering.dk, hvis du ønsker det,
                eller hvis du har spørgsmål til vores behandling af dine
                personoplysninger.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-ink-soft">
          Sidst opdateret: juli 2026. Vi forbeholder os ret til at opdatere
          disse vilkår løbende.
        </p>
      </section>
    </div>
  );
}
