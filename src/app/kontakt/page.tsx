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
    <>
      <PageHero
        eyebrow="Book & kontakt"
        title="Book din tid – vi kommer til dig"
        text="Udfyld formularen, så ringer eller skriver vi til dig inden for 24 timer og aftaler det hele."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <BookingForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-50 p-7">
              <h2 className="font-bold text-brand-950">Foretrækker du telefonen?</h2>
              <p className="mt-2 text-sm text-slate-600">
                Ring eller skriv – vi svarer alle hverdage kl. 8-18.
              </p>
              <a
                href="tel:+4500000000"
                className="mt-4 block text-lg font-bold text-brand-700"
              >
                00 00 00 00
              </a>
              <a
                href="mailto:kontakt@fynboensmobilklargoering.dk"
                className="mt-1 block break-all text-sm font-semibold text-brand-700 hover:underline"
              >
                kontakt@fynboensmobilklargoering.dk
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h2 className="font-bold text-brand-950">Hvad sker der nu?</h2>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-accent-600">1.</span>
                  Vi modtager din forespørgsel med det samme.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent-600">2.</span>
                  Vi kontakter dig inden for 24 timer og aftaler tid, sted og
                  endelig pris.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent-600">3.</span>
                  Vi kommer til dig med alt udstyr og gør bilen som ny.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
