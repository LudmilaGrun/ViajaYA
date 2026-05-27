# ViajaYA Monorepo

Proyecto full stack con app móvil (Expo), panel admin (React + Vite), API (Express) y backend de datos/auth en Supabase.

## Estructura
- `mobile/` app React Native + Expo
- `web-admin/` panel admin React + Vite + Tailwind
- `server/` API Express con JWT/Supabase
- `supabase/` SQL, políticas RLS, seeds
- `docs/` documentación de endpoints y arquitectura

## Requisitos
- Node 20+
- npm 10+
- Expo CLI opcional
- Proyecto Supabase

## 1) Variables de entorno

### server/.env
```env
PORT=4000
NODE_ENV=development
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
JWT_SECRET=super-secret
CLIENT_ORIGIN=http://localhost:5173
```

### mobile/.env
```env
EXPO_PUBLIC_API_URL=http://localhost:4000/api
EXPO_PUBLIC_SUPABASE_URL=...
EXPO_PUBLIC_SUPABASE_ANON_KEY=...
```

### web-admin/.env
```env
VITE_API_URL=http://localhost:4000/api
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## 2) Instalación
```bash
npm install
npm run install:all
```

## 3) Base de datos Supabase
1. Ejecutar `supabase/migrations/001_init.sql`
2. Ejecutar `supabase/seeds.sql`
3. Crear bucket: `avatars`, `trips`

## 4) Ejecutar
```bash
npm run dev
```
- API: `http://localhost:4000`
- Admin: `http://localhost:5173`
- Mobile: `expo start`

## 5) Scripts
- `npm run dev` inicia server + admin
- `npm run dev:mobile` inicia Expo
- `npm run lint` lint en workspaces

Ver `docs/API.md` para endpoints.
