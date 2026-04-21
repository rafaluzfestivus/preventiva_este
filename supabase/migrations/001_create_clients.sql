-- Tabela de leads do site Preventiva Este
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  name text,
  whatsapp text unique,
  email text,
  postal_code text,
  service_requested text,
  message text,
  source text default 'site',
  status text default 'lead',
  created_at timestamptz default now()
);

-- Row Level Security
alter table clients enable row level security;

-- Permite insert do site (anon key)
create policy "insert_from_site" on clients
  for insert with check (true);

-- Apenas service_role pode ler
create policy "service_role_select" on clients
  for select using (auth.role() = 'service_role');
