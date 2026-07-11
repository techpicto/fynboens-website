"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSession, destroySession, isLoggedIn, verifyPassword } from "@/lib/auth";
import { getSupabaseAdmin, bookingStatuses, type BookingStatus } from "@/lib/supabase";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (!verifyPassword(password)) {
    redirect("/admin?fejl=1");
  }

  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin");
}

export async function updateBookingStatus(id: string, status: string) {
  if (!(await isLoggedIn())) {
    throw new Error("Ikke logget ind");
  }
  if (!bookingStatuses.includes(status as BookingStatus)) {
    throw new Error("Ugyldig status");
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("bookings")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Statusopdatering fejlede:", error);
    throw new Error("Kunne ikke opdatere status");
  }

  revalidatePath("/admin");
}

export async function deleteBooking(
  id: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!(await isLoggedIn())) {
    return { ok: false, error: "Ikke logget ind" };
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error("Sletning fejlede:", error);
    // 42501 = manglende GRANT DELETE — migration 0004 er ikke kørt endnu
    if (error.code === "42501") {
      return {
        ok: false,
        error:
          "Databasen mangler slette-rettighed. Kør migration 0004_grant_delete_service_role.sql i Supabase.",
      };
    }
    return { ok: false, error: "Kunne ikke slette forespørgslen. Prøv igen." };
  }

  revalidatePath("/admin");
  return { ok: true };
}
