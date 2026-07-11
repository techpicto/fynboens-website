-- Udvider status-mulighederne på bookings fra 3 til 5 værdier:
-- ny, kontaktet, booket, afsluttet, annulleret.

alter table public.bookings drop constraint if exists bookings_status_check;

alter table public.bookings
  add constraint bookings_status_check
  check (status in ('ny', 'kontaktet', 'booket', 'afsluttet', 'annulleret'));
