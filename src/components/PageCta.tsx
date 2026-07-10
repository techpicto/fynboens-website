import { Button } from "./ui";

export default function PageCta({
  title = "Klar til at komme i gang?",
  text = "Book online i dag – vi kommer til dig overalt på Fyn.",
  buttonLabel = "Book din tid nu",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl bg-ink px-6 py-16 text-center text-white sm:py-20">
        <h2 className="mx-auto max-w-2xl break-words font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight hyphens-auto sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-cream/75">{text}</p>
        <Button href="/kontakt" variant="pastel" className="mt-8 px-10 py-4">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
