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
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4 py-16">
      <div className="rounded-3xl bg-white p-8 sm:p-10">
        <h1 className="text-center font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
          Admin-login
        </h1>
        <p className="mt-2 text-center text-sm text-ink-soft">
          Indtast adgangskoden for at se booking-forespørgsler.
        </p>
        <form action={login} className="mt-8 space-y-4">
          <input
            type="password"
            name="password"
            required
            autoFocus
            placeholder="Adgangskode"
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-ink-soft/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-periwinkle"
          />
          {showError && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Forkert adgangskode. Prøv igen.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink/85"
          >
            Log ind
          </button>
        </form>
      </div>
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
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            Booking-forespørgsler
          </h1>
          <p className="mt-1 text-sm text-ink-soft">
            {bookings.length} i alt · {counts.ny} nye · {counts.kontaktet}{" "}
            kontaktet · {counts.afsluttet} afsluttet
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-ink/25 px-5 py-2 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink/5"
          >
            Log ud
          </button>
        </form>
      </div>

      {error && (
        <p className="mt-8 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Kunne ikke hente bookinger: {error.message}
        </p>
      )}

      {!error && bookings.length === 0 && (
        <p className="mt-12 rounded-3xl border border-dashed border-line bg-paper p-12 text-center text-ink-soft">
          Ingen forespørgsler endnu. De dukker op her, når nogen udfylder
          formularen på hjemmesiden.
        </p>
      )}

      {bookings.length > 0 && (
        <div className="mt-8 space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="rounded-3xl bg-white p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-bold tracking-tight text-ink">
                    {booking.name}
                  </p>
                  <p className="text-xs text-ink-soft">
                    {formatDate(booking.created_at)}
                  </p>
                </div>
                <StatusSelect id={booking.id} status={booking.status} />
              </div>

              <dl className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Telefon
                  </dt>
                  <dd>
                    <a
                      href={`tel:${booking.phone}`}
                      className="font-semibold text-ink underline underline-offset-4"
                    >
                      {booking.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    E-mail
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${booking.email}`}
                      className="break-all font-semibold text-ink underline underline-offset-4"
                    >
                      {booking.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Adresse
                  </dt>
                  <dd className="text-ink">{booking.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Bilstørrelse
                  </dt>
                  <dd className="text-ink">{booking.car_size}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Ydelse
                  </dt>
                  <dd className="text-ink">{booking.service}</dd>
                </div>
                {booking.comment && (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Kommentar
                    </dt>
                    <dd className="whitespace-pre-wrap rounded-xl bg-sand/60 p-3 text-ink">
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
