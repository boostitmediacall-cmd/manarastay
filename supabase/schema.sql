-- Tables Manara Stay
-- À coller dans le SQL Editor de Supabase.

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text,
  author_display text,
  source text default 'airbnb',
  rating int check (rating is null or rating between 1 and 5),
  screenshot_url text,
  locale text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.leads_owners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  city text,
  property_type text,
  message text,
  locale text,
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text not null,
  locale text,
  created_at timestamptz not null default now()
);

alter table public.testimonials enable row level security;
alter table public.leads_owners enable row level security;
alter table public.contacts enable row level security;

create policy "Public can read published testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (published = true);

create policy "Anyone can insert owner leads"
  on public.leads_owners
  for insert
  to anon, authenticated
  with check (true);

create policy "Anyone can insert contacts"
  on public.contacts
  for insert
  to anon, authenticated
  with check (true);

-- Gestion des avis / leads : Table Editor (rôle service / dashboard).
-- Ne pas inventer d'avis : published = true uniquement pour des extraits ou captures réels.
