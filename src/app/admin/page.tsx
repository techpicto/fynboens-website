import type { Metadata } from "next";
import { isLoggedIn } from "@/lib/auth";
import { getSupabaseAdmin, type Booking } from "@/lib/supabase";
import { login, logout } from "./actions";
import StatusSelect from "./StatusSelect";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("da-DK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Copenhagen",
  });
}

function LoginForm({ showError }: { showError: boolean }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col justify-center px-4 py-16">
      <h1 className="text-center text-2xl font-bold text-brand-950">
        Admin-login
      </h1>
      <p className="mt-2 text-center text-sm text-slate-500">
        Indtast adgangskoden for at se booking-forespørgsler.
      </p>
      <form action={login} className="mt-8 space-y-4">
        <input
          type="password"
          name="password"
          required
          autoFocus
          placeholder="Adgangskode"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
        {showError && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Forkert adgangskode. Prøv igen.
          </p>
        )}
        <button
          type="submit"
          className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          Log ind
        </button>
      </form>
    </div>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ fejl?: string }>;
}) {
  const params = await searchParams;

  if (!(await isLoggedIn())) {
    return <LoginForm showError={params.fejl === "1"} />;
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  const bookings = (data ?? []) as Booking[];
  const counts = {
    ny: bookings.filter((b) => b.status === "ny").length,
    kontaktet: bookings.filter((b) => b.status === "kontaktet").length,
    afsluttet: bookings.filter((b) => b.status === "afsluttet").length,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-950">
            Booking-forespørgsler
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {bookings.length} i alt · {counts.ny} nye · {counts.kontaktet}{" "}
            kontaktet · {counts.afsluttet} afsluttet
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
          >
            Log ud
          </button>
        </form>
      </div>

      {error && (
        <p className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Kunne ikke hente bookinger: {error.message}
        </p>
      )}

      {!error && bookings.length === 0 && (
        <p className="mt-12 rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
          Ingen forespørgsler endnu. De dukker op her, når nogen udfylder
          formularen på hjemmesiden.
        </p>
      )}

      {bookings.length > 0 && (
        <div className="mt-8 space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-brand-950">{booking.name}</p>
                  <p className="text-xs text-slate-400">
                    {formatDate(booking.created_at)}
                  </p>
                </div>
                <StatusSelect id={booking.id} status={booking.status} />
              </div>

              <dl className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">Telefon</dt>
                  <dd>
                    <a href={`tel:${booking.phone}`} className="text-brand-700 hover:underline">
                      {booking.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">E-mail</dt>
                  <dd>
                    <a href={`mailto:${booking.email}`} className="break-all text-brand-700 hover:underline">
                      {booking.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">Adresse</dt>
                  <dd className="text-slate-700">{booking.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">Bilstørrelse</dt>
                  <dd className="text-slate-700">{booking.car_size}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">Ydelse</dt>
                  <dd className="text-slate-700">{booking.service}</dd>
                </div>
                {booking.comment && (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <dt className="text-xs font-semibold uppercase text-slate-400">Kommentar</dt>
                    <dd className="whitespace-pre-wrap text-slate-700">
                      {booking.comment}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
