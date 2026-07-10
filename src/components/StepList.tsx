import { steps } from "@/lib/content";

export default function StepList() {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-6 rounded-3xl bg-paper p-6 sm:p-8"
        >
          <span className="font-display text-3xl font-extrabold text-periwinkle-deep sm:text-4xl">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              {step.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
