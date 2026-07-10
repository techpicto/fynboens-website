import Link from "next/link";

export default function PageCta({
  title = "Klar til at komme i gang?",
  text = "Book online i dag – vi kommer til dig overalt på Fyn.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-accent-700 to-brand-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">{text}</p>
        <Link
          href="/kontakt"
          className="mt-7 inline-block rounded-full bg-white px-9 py-3.5 font-bold text-brand-800 shadow-lg transition-transform hover:scale-105"
        >
          Book din tid nu
        </Link>
      </div>
    </section>
  );
}
