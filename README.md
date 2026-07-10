# Fynboens Mobil Klargøring – hjemmeside

Next.js (App Router) + Tailwind CSS 4 + Supabase + Resend.

## Kom i gang

```bash
npm install
npm run dev
```

Siden kører på http://localhost:3000.

## Miljøvariabler (`.env.local`)

| Variabel | Påkrævet | Beskrivelse |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Ja | Supabase-projektets URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Ja | Publishable/anon-nøgle |
| `SUPABASE_SERVICE_ROLE_KEY` | **Ja** | Service role-nøgle (`sb_secret_...`). Bookings-tabellen har RLS uden anon-adgang, så uden denne kan formularen ikke gemme og admin ikke læse. Findes i Supabase under *Project Settings → API Keys*. |
| `RESEND_API_KEY` | Ja | Resend-nøgle til notifikationsmails |
| `ADMIN_PASSWORD` | Ja | Adgangskode til `/admin` |
| `BOOKING_NOTIFY_EMAIL` | Nej | Modtager af booking-mails (standard: kontakt@fynboensmobilklargoering.dk) |
| `BOOKING_FROM_EMAIL` | Nej | Afsender (standard: `onboarding@resend.dev` — skift til egen verificeret domæneadresse i Resend) |

## Database

Kør migrationen i Supabase (SQL Editor eller `supabase db push`):

```
supabase/migrations/0001_create_bookings.sql
```

Den opretter tabellen `bookings` med RLS slået til og **ingen** policies —
kun service role kan læse/skrive.

## Sider

- `/` – forside
- `/priser`, `/privat`, `/erhverv`, `/om-os`, `/foer-efter`
- `/kontakt` – booking-formular (gemmer i Supabase + sender mail via Resend)
- `/admin` – password-beskyttet oversigt over forespørgsler med statusstyring
  (ny / kontaktet / afsluttet)

## Noter

- Booking-flow: `src/app/api/bookings/route.ts` (POST). Mail-fejl vælter ikke
  bookingen — den logges blot.
- Admin-login: simpel HttpOnly-cookie afledt af `ADMIN_PASSWORD`
  (`src/lib/auth.ts`), ingen brugerdatabase.
- Telefonnummer og e-mail i header/footer/kontaktside er pladsholdere —
  søg efter `00 00 00 00` og `kontakt@fynboensmobilklargoering.dk` og erstat.
