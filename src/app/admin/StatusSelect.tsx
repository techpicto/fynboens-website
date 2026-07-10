"use client";

import { useState, useTransition } from "react";
import type { BookingStatus } from "@/lib/supabase";
import { updateBookingStatus } from "./actions";

const styles: Record<BookingStatus, string> = {
  ny: "bg-periwinkle text-ink border-periwinkle-deep",
  kontaktet: "bg-sand text-ink border-line",
  afsluttet: "bg-ink text-white border-ink",
};

export default function StatusSelect({
  id,
  status,
}: {
  id: string;
  status: BookingStatus;
}) {
  const [current, setCurrent] = useState<BookingStatus>(status);
  const [isPending, startTransition] = useTransition();

  function handleChange(next: BookingStatus) {
    const previous = current;
    setCurrent(next);
    startTransition(async () => {
      try {
        await updateBookingStatus(id, next);
      } catch {
        setCurrent(previous);
        alert("Kunne ikke opdatere status. Prøv igen.");
      }
    });
  }

  return (
    <select
      value={current}
      disabled={isPending}
      onChange={(e) => handleChange(e.target.value as BookingStatus)}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${styles[current]} ${
        isPending ? "opacity-50" : ""
      }`}
    >
      <option value="ny">Ny</option>
      <option value="kontaktet">Kontaktet</option>
      <option value="afsluttet">Afsluttet</option>
    </select>
  );
}
