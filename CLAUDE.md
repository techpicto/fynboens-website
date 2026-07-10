# Fynboens Mobil Klargøring

Next.js 15 (App Router) + Tailwind CSS 4 + Supabase (bookings, RLS uden
anon-adgang) + Resend (notifikationsmails) + simpel cookie-admin.

## Designregel (FAST — godkendt af ejeren)

Alle nye sider, komponenter og sektioner SKAL følge den godkendte designstil
fra forsiden. Brug ALDRIG den tidligere blå/grønne stil.

- Palette (tokens i `src/app/globals.css` under `@theme`):
  `cream` #F6F0E8 (baggrund), `sand` #EFE7DE (sektioner), `paper` #FBF8F3,
  `ink` #101A2C (tekst/mørke flader/knapper), `ink-soft` #5F6270,
  `periwinkle` #B8C9F5 (accent), `periwinkle-deep` #A7BAEE (hover),
  `line` #E4DCD2 (kanter). Ingen grønne knapper, ingen klassisk blå.
- Typografi: Archivo (`font-display`) til store kompakte UPPERCASE-overskrifter
  med `tracking-tight leading-[0.98]`; Inter til brødtekst. Små eyebrow-labels
  i uppercase med `tracking-[0.2em]` over hver sektion.
- Form: kort/billeder `rounded-3xl`, knapper `rounded-full` (uppercase, bold),
  formularfelter `rounded-xl`, sektioner `py-20`, badges hvide piller.
- CTA-knapper: navy (`bg-ink text-white`) eller pastelblå
  (`bg-periwinkle text-ink`) — aldrig andet.
- Genbrug komponenterne i `src/components/ui.tsx` (Button, Eyebrow,
  SectionHeader, Badge, CheckItem), `PageHero`, `PageCta` — ingen hardcodede
  engangsfarver på enkeltsider.

## Struktur

- `src/app/(site)/` — offentlige sider med Header/Footer
- `src/app/admin/` — admin uden offentlig navigation
- `src/app/api/bookings/route.ts` — gemmer i Supabase + sender Resend-mail
- `src/lib/` — supabase-klient (service role), auth (cookie), delt indhold
- `supabase/migrations/` — SQL-migrationer

## Kommandoer

- `npm run dev` / `npm run build`
- TypeScript er låst til v5 (v7 kan ikke indlæse next.config.ts i Next 15)
