export default function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="mt-10 space-y-3">
      {items.map((faq) => (
        <details key={faq.q} className="group rounded-2xl bg-white px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-ink sm:text-base">
            {faq.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-periwinkle/30 text-ink transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
