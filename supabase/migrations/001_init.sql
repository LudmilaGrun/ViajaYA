create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role text default 'user',
  phone text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  deleted_at timestamptz
);
create table if not exists destinations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  country text not null,
  image_url text,
  created_at timestamptz default now()
);
create table if not exists categories (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null
);
create table if not exists trips (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  destination_id uuid references destinations(id),
  category_id uuid references categories(id),
  price numeric(12,2) not null,
  seats int default 0,
  starts_at timestamptz,
  ends_at timestamptz,
  image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  deleted_at timestamptz
);
create table if not exists reservations (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id),
  trip_id uuid references trips(id),
  status text default 'pending',
  qr_code text,
  created_at timestamptz default now()
);
create table if not exists favorites (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id),
  trip_id uuid references trips(id),
  created_at timestamptz default now(),
  unique(user_id,trip_id)
);
create table if not exists payments (id uuid primary key default uuid_generate_v4(),reservation_id uuid references reservations(id),amount numeric(12,2),status text,method text,created_at timestamptz default now());
create table if not exists notifications (id uuid primary key default uuid_generate_v4(),user_id uuid references profiles(id),title text,message text,read boolean default false,created_at timestamptz default now());
create table if not exists support_tickets (id uuid primary key default uuid_generate_v4(),user_id uuid references profiles(id),subject text,message text,status text default 'open',created_at timestamptz default now());
create table if not exists reviews (id uuid primary key default uuid_generate_v4(),user_id uuid references profiles(id),trip_id uuid references trips(id),rating int,message text,created_at timestamptz default now());
create table if not exists admins (id uuid primary key references profiles(id),created_at timestamptz default now());
create table if not exists settings (id uuid primary key default uuid_generate_v4(),key text unique,value jsonb,updated_at timestamptz default now());
create table if not exists sessions (id uuid primary key default uuid_generate_v4(),user_id uuid references profiles(id),device text,last_seen timestamptz default now());
create table if not exists logs (id bigserial primary key,level text,message text,meta jsonb,created_at timestamptz default now());

create index if not exists idx_trips_search on trips(title);
create index if not exists idx_reservation_user on reservations(user_id);

alter table profiles enable row level security;
alter table trips enable row level security;
alter table reservations enable row level security;

create policy "public trips" on trips for select using (deleted_at is null);
create policy "self profile" on profiles for select using (auth.uid()=id);
create policy "self reservation" on reservations for select using (auth.uid()=user_id);
