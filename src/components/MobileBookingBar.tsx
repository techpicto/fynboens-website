import Link from "next/link";

/* Sticky "Book nu"-knap i bunden på mobil/tablet — skjules på lg og op,
   hvor header-knappen allerede er synlig. */
export default function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <Link
        href="/kontakt#booking"
        className="block w-full rounded-full bg-ink px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink/85"
      >
        Book nu
      </Link>
    </div>
  );
}
