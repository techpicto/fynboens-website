"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSession, destroySession, isLoggedIn, verifyPassword } from "@/lib/auth";
import { getSupabaseAdmin, type BookingStatus } from "@/lib/supabase";

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

const validStatuses: BookingStatus[] = ["ny", "kontaktet", "afsluttet"];

export async function updateBookingStatus(id: string, status: string) {
  if (!(await isLoggedIn())) {
    throw new Error("Ikke logget ind");
  }
  if (!validStatuses.includes(status as BookingStatus)) {
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
