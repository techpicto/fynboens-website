import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type BookingStatus =
  | "ny"
  | "kontaktet"
  | "booket"
  | "afsluttet"
  | "annulleret";

export const bookingStatuses: BookingStatus[] = [
  "ny",
  "kontaktet",
  "booket",
  "afsluttet",
  "annulleret",
];

export const bookingStatusLabels: Record<BookingStatus, string> = {
  ny: "Ny",
  kontaktet: "Kontaktet",
  booket: "Booket",
  afsluttet: "Afsluttet",
  annulleret: "Annulleret",
};

export type Booking = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  car_size: string;
  service: string;
  comment: string | null;
  status: BookingStatus;
};

/**
 * Server-side Supabase-klient med service role-nøglen.
 * Bookings-tabellen har RLS uden policies, så anon-nøglen har ingen adgang —
 * al læsning/skrivning skal ske herfra (API-routes og server actions).
 */
export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!url) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL mangler i .env.local");
  }
  if (!serviceKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY mangler i .env.local (findes under Project Settings → API Keys i Supabase)"
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
