import Link from "next/link";
import type { ReactNode } from "react";

/* Fælles designsystem — brug ALTID disse komponenter frem for engangsstyling.
   Palette-tokens er defineret i src/app/globals.css (@theme). */

type ButtonVariant = "dark" | "pastel" | "outline-light" | "outline-dark";

const buttonStyles: Record<ButtonVariant, string> = {
  dark: "bg-ink text-white hover:bg-ink/85",
  pastel: "bg-periwinkle text-ink hover:bg-periwinkle-deep",
  "outline-light": "border border-white/25 text-white hover:bg-white/10",
  "outline-dark": "border border-ink/25 text-ink hover:bg-ink/5",
};

export function Button({
  href,
  variant = "dark",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wide transition-colors ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-periwinkle" : "text-ink-soft"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <Eyebrow light={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-2 max-w-2xl break-words font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight hyphens-auto sm:text-5xl ${
          dark ? "text-white" : "text-ink"
        } ${center ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-md leading-relaxed ${
            dark ? "text-cream/75" : "text-ink-soft"
          } ${center ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
      {children}
    </span>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function CheckItem({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <li
      className={`flex items-center gap-2 text-sm ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <span className={light ? "text-periwinkle" : "text-ink/40"}>
        <CheckIcon />
      </span>
      {children}
    </li>
  );
}
