"use client";

import { useTransition } from "react";
import { deleteBooking } from "./actions";

export default function DeleteButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    const confirmed = window.confirm(
      `Er du sikker på, at du vil slette forespørgslen fra "${name}"? Dette kan ikke fortrydes.`
    );
    if (!confirmed) return;

    startTransition(async () => {
      const result = await deleteBooking(id);
      if (!result.ok) {
        alert(result.error);
      }
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className="rounded-full border border-line px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-soft transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
    >
      {isPending ? "Sletter..." : "Slet"}
    </button>
  );
}
