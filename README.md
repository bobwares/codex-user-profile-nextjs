# Customer Registration Wizard

Customer Registration Wizard is a Next.js (App Router) application that guides visitors through a
multi-step onboarding flow. The experience captures account credentials, personal details,
addresses, communication preferences, and required consents before creating the customer record via
server actions and mocked API endpoints.

## Getting Started

```bash
pnpm install
pnpm dev
```

The app runs on <http://localhost:3000>. Use the **Register** call to action on the landing page to
launch the wizard.

## Available Scripts

- `pnpm dev` – Start the Next.js development server.
- `pnpm build` – Create an optimized production build.
- `pnpm start` – Run the production build.
- `pnpm lint` – Execute ESLint using the Next.js config.
- `pnpm test` – Run Jest unit and component tests.

## Project Highlights

- App Router with typed routes, server actions, and Tailwind CSS styling.
- Registration state stored in encrypted cookies between steps.
- Mocked API layer for customer creation, verification, and geography lookups.
- Observability helpers for funnel and error instrumentation.
