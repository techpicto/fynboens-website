"use client";

import { useState, useTransition } from "react";
import type { BookingStatus } from "@/lib/supabase";
import { updateBookingStatus } from "./actions";

const styles: Record<BookingStatus, string> = {
  ny: "bg-amber-100 text-amber-800 border-amber-300",
  kontaktet: "bg-brand-100 text-brand-800 border-brand-300",
  afsluttet: "bg-accent-100 text-accent-800 border-accent-300",
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
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${styles[current]} ${
        isPending ? "opacity-50" : ""
      }`}
    >
      <option value="ny">Ny</option>
      <option value="kontaktet">Kontaktet</option>
      <option value="afsluttet">Afsluttet</option>
    </select>
  );
}
