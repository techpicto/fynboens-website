export default function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-brand-100">{text}</p>
      </div>
    </section>
  );
}
