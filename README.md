# Customer Registration Wizard

This project scaffolds a multi-step customer registration experience built with Next.js App Router and Tailwind CSS. It guides
customers through account creation, personal details, address capture, preference configuration, and final review with mock API
endpoints.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000) to interact with the wizard.

## Available scripts

- `npm run dev` — Starts the Next.js development server.
- `npm run build` — Compiles the application for production.
- `npm run start` — Runs the production build.
- `npm run lint` — Executes ESLint using the flat config.

## Environment variables

Copy `.env.example` to `.env.local` and adjust values as needed.

```
API_BASE=http://localhost:3000
EMAIL_FROM=no-reply@example.com
```

## Project structure

```
src/
  app/
    register/            # Multi-step registration routes with loading/error states
    verify/              # Email and phone verification routes
    api/                 # Mock API endpoints for customer creation and geo data
  components/
    client/              # Client components for interactivity and telemetry
    ui/                  # Server presentational components shared across routes
  lib/                   # Shared utilities and telemetry helpers
  services/              # Server-side data access helpers
```

## Testing

Automated tests are not yet implemented. Add unit and integration tests as the domain logic evolves.
