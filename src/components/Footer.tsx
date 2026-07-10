import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">
            Fynboens Mobil Klargøring
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
            <li><Link href="/privat" className="hover:text-white">Privat</Link></li>
            <li><Link href="/erhverv" className="hover:text-white">Erhverv</Link></li>
            <li><Link href="/priser" className="hover:text-white">Priser</Link></li>
            <li><Link href="/foer-efter" className="hover:text-white">Før & efter</Link></li>
            <li><Link href="/om-os" className="hover:text-white">Om os</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Book & kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Hele Fyn og omegn</li>
            <li>
              <a href="tel:+4500000000" className="hover:text-white">
                Tlf: 00 00 00 00
              </a>
            </li>
            <li>
              <a
                href="mailto:kontakt@fynboensmobilklargoering.dk"
                className="hover:text-white"
              >
                kontakt@fynboensmobilklargoering.dk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Fynboens Mobil Klargøring. Alle
            rettigheder forbeholdes.
          </p>
          <Link href="/admin" className="hover:text-white">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
