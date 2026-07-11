-- service_role mangler DELETE-rettigheden på bookings-tabellen.
--
-- Baggrund: Dette er IKKE en RLS-begrænsning — service_role omgår RLS helt,
-- og fejlen fra Postgres er 42501 ("permission denied"), som er en manglende
-- tabel-rettighed (GRANT), ikke en policy-afvisning. Supabase giver normalt
-- service_role ALLE rettigheder på nye tabeller, men DELETE er på et
-- tidspunkt blevet fjernet (formentlig via dashboardets privilege-editor).
-- SELECT/INSERT/UPDATE virker fortsat; kun DELETE blev afvist.
--
-- Adgangsmodellen er uændret: anon/authenticated har stadig INGEN adgang
-- (RLS uden policies), så sletning kan kun ske server-side via service role
-- — i praksis kun gennem admin-panelets login-beskyttede server action.

grant delete on table public.bookings to service_role;
