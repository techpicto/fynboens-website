import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book & kontakt",
  description:
    "Book mobil bilrens på Fyn. Udfyld formularen, så kontakter vi dig inden for 24 timer og aftaler tid og sted.",
};

export default function KontaktPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Book & kontakt"
        title="Book din tid – vi kommer til dig"
        text="Udfyld formularen, så ringer eller skriver vi til dig inden for 24 timer og aftaler det hele."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white p-6 sm:p-10">
            <BookingForm />
          </div>

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
                  Vi modtager din forespørgsel med det samme.
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-xl font-extrabold text-periwinkle-deep">
                    02
                  </span>
                  Vi kontakter dig inden for 24 timer og aftaler tid, sted og
                  endelig pris.
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-xl font-extrabold text-periwinkle-deep">
                    03
                  </span>
                  Vi kommer til dig med alt udstyr og gør bilen som ny.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
