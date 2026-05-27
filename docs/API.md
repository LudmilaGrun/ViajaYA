# API ViajaYA
Base URL: `/api`

## Auth
- `POST /auth/login` -> `{ email, password }`

## Trips
- `GET /trips?page=1&limit=10&search=cancun`

## Protected
- `GET /reservations`
- `GET /favorites`
- `GET /notifications`
- `GET /support/tickets`
- `GET /admin/stats`

Header requerido: `Authorization: Bearer <jwt>`
