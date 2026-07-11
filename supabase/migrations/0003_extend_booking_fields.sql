-- Udvider bookings-tabellen til den fulde booking-formular:
-- postnr/by (separat fra adresse), kundetype (privat/erhverv) med
-- virksomhedsnavn+CVR for erhverv, ønsket dato, tidsvindue og vilkårs-accept.

alter table public.bookings
  add column if not exists postal_code text not null default '',
  add column if not exists city text not null default '',
  add column if not exists customer_type text not null default 'privat',
  add column if not exists company_name text,
  add column if not exists cvr text,
  add column if not exists preferred_date date,
  add column if not exists earliest_start text,
  add column if not exists latest_end text,
  add column if not exists terms_accepted boolean not null default false;

alter table public.bookings
  drop constraint if exists bookings_customer_type_check;

alter table public.bookings
  add constraint bookings_customer_type_check
  check (customer_type in ('privat', 'erhverv'));

-- Fjerner default '' igen, så nye rækker fremover kræver rigtige værdier
-- fra API'et (defaults ovenfor er kun for at kunne tilføje kolonnerne på en
-- tabel, der allerede indeholder rækker).
alter table public.bookings alter column postal_code drop default;
alter table public.bookings alter column city drop default;
alter table public.bookings alter column customer_type drop default;
