import type { ReactNode } from "react";
import { Button } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  text,
  buttonLabel,
  buttonHref = "/kontakt",
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="rounded-3xl bg-ink p-8 text-white sm:p-12">
        <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-periwinkle">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-cream/75">{text}</p>
        {buttonLabel && (
          <div className="mt-8">
            <Button href={buttonHref} variant="pastel">
              {buttonLabel}
            </Button>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
