import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="border-b border-line bg-cream">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm text-periwinkle">
              ✦
            </span>
            <span className="font-display text-sm font-bold tracking-tight text-ink">
              Admin · Fynboens Mobil Klargøring
            </span>
          </span>
          <Link
            href="/"
            className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            ← Til hjemmesiden
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
