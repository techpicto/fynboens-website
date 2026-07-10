import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white">
            <span className="text-periwinkle">✦</span> Fynboens Mobil
            Klargøring
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Professionel mobil bilrens og damprens på hele Fyn. Vi kommer til
            dig – hjemme, på arbejdet eller i virksomheden.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Sider
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/privat" className="hover:text-periwinkle">Privat</Link></li>
            <li><Link href="/erhverv" className="hover:text-periwinkle">Erhverv</Link></li>
            <li><Link href="/priser" className="hover:text-periwinkle">Priser</Link></li>
            <li><Link href="/foer-efter" className="hover:text-periwinkle">Før & efter</Link></li>
            <li><Link href="/om-os" className="hover:text-periwinkle">Om os</Link></li>
            <li><Link href="/kontakt" className="hover:text-periwinkle">Book & kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Hele Fyn og omegn</li>
            <li>
              <a href="tel:+4500000000" className="hover:text-periwinkle">
                Tlf: 00 00 00 00
              </a>
            </li>
            <li>
              <a
                href="mailto:kontakt@fynboensmobilklargoering.dk"
                className="hover:text-periwinkle"
              >
                kontakt@fynboensmobilklargoering.dk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Fynboens Mobil Klargøring. Alle
            rettigheder forbeholdes.
          </p>
          <Link href="/admin" className="hover:text-periwinkle">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
