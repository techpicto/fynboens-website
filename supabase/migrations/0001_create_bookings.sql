-- Bookings-tabel til booking-forespørgsler fra hjemmesiden.
-- RLS er slået til, og der oprettes INGEN policies for anon/authenticated.
-- Det betyder, at kun service role (som omgår RLS) kan læse/skrive.

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  address text not null,
  car_size text not null,
  service text not null,
  comment text,
  status text not null default 'ny' check (status in ('ny', 'kontaktet', 'afsluttet'))
);

comment on table public.bookings is 'Booking-forespørgsler fra fynboens-mobil-klargoering.dk';

alter table public.bookings enable row level security;

-- Ingen policies: anon og authenticated har dermed ingen adgang.
-- Al adgang sker server-side via service role-nøglen.

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);
