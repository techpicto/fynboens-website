import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CalBookingInline from "@/components/CalBookingInline";

export const metadata: Metadata = {
  title: "Book & kontakt",
  description:
    "Book mobil bilrens på Fyn. Vælg en ledig tid direkte i kalenderen – vi kommer til dig med alt udstyr.",
};

export default function KontaktPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Book & kontakt"
        title="Book din tid – vi kommer til dig"
        text="Vælg en ledig tid, udfyld oplysningerne om bilen og adressen, så modtager du en bekræftelse på din booking."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <CalBookingInline />

          <aside className="space-y-4">
            <div className="rounded-3xl bg-ink p-8 text-white">
              <h2 className="font-display text-lg font-bold tracking-tight">
                Foretrækker du telefonen?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                Ring eller skriv – vi svarer alle hverdage kl. 8-18.
              </p>
              <a
                href="tel:+4500000000"
                className="mt-5 block font-display text-2xl font-extrabold tracking-tight text-periwinkle"
              >
                00 00 00 00
              </a>
              <a
                href="mailto:kontakt@fynboensmobilklargoering.dk"
                className="mt-2 block break-all text-sm font-semibold text-cream/75 underline underline-offset-4 hover:text-periwinkle"
              >
                kontakt@fynboensmobilklargoering.dk
              </a>
            </div>

            <div className="rounded-3xl bg-sand p-8">
              <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                Hvad sker der nu?
              </h2>
              <ol className="mt-4 space-y-4 text-sm text-ink-soft">
                <li className="flex gap-4">
                  <span className="font-display text-xl font-extrabold text-periwinkle-deep">
                    01
                  </span>
                  Du vælger en ledig tid og udfylder oplysningerne om bilen og
                  adressen.
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-xl font-extrabold text-periwinkle-deep">
                    02
                  </span>
                  Du modtager en bekræftelse på din booking via e-mail.
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-xl font-extrabold text-periwinkle-deep">
                    03
                  </span>
                  Vi kommer til den angivne adresse med alt nødvendigt udstyr
                  og udfører klargøringen.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
