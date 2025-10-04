File: project_root/.gitignore

```text

# Dependencies
node_modules

# Build output
.next
out

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Testing
coverage

# Env files
.env

# Misc
.DS_Store


```

File: project_root/README.md

```text

# Customer Registration Wizard

A Next.js App Router experience that guides new customers through a secure, multi-step onboarding journey. The wizard captures account credentials, personal information, address details, communication preferences, and consent before creating a customer record via mocked API routes. Tailwind CSS powers the UI, and server-first rendering keeps the flow performant and accessible.

## Getting Started

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to explore the flow.

## Testing

```bash
pnpm test
```

## Linting

```bash
pnpm lint
```

## Project Structure Highlights

- `src/app` – App Router routes for each wizard step, verification flows, and API mocks.
- `src/services` – Server-first modules for domain logic and data fetching.
- `src/components` – Presentational components, including a product highlight surface.
- `tests/routes` – Jest + Testing Library smoke tests for each route segment.


```

File: project_root/ai/agentic-pipeline/turns/1/adr.md

```text

# Architecture Decision Record

Next.js App Router Scaffold with Tailwind and Server Actions

**Turn**: 1

**Status**: Accepted

**Date**: 2025-10-04 - 19:22

**Context**
The Customer Registration project required a foundational Next.js implementation aligned with the App Router pattern, including Tailwind styling, mocked APIs, and a multi-step wizard.

**Options Considered**
- Build with Next.js App Router, Tailwind, and server actions (recommended by pattern).
- Use Pages Router with client-heavy forms.
- Use an alternative framework such as Remix or Nuxt.

**Decision**
Followed the prescribed Next.js App Router pattern, leveraging server components for each wizard step, Tailwind for styling, and server actions for submission. Mocked API routes align with the pattern inputs and support integration later.

**Result**
Created route files, shared layouts, context providers, mocked API handlers, and supporting tests/documentation.

**Consequences**
- Pros: Server-first rendering, consistent developer tooling, easy extension for future steps.
- Cons: Requires developers to be familiar with App Router conventions and server actions.


```

File: project_root/ai/agentic-pipeline/turns/1/changelog.md

```text

# Turn: 1 – 2025-10-04 - 19:22 UTC

## Prompt
execute turn 1

#### Task
Execute turn 1 pipeline for the Customer Registration project.

#### Changes
- Scaffolded Next.js App Router project with Tailwind, linting, and testing setup.
- Implemented multi-step registration wizard routes with shared layout and server actions.
- Added mocked API handlers, geo services, and supporting UI components.
- Authored smoke tests for each route and documented project usage.


```

File: project_root/ai/agentic-pipeline/turns/1/manifest.json

```text

{
  "turnId": 1,
  "timestampUtc": "2025-10-04T19:22:27Z",
  "actor": {
    "initiator": "user",
    "agent": "gpt-5-codex"
  },
  "task": {
    "name": "execute-turn-1",
    "inputs": ["ai/context/project_context.md"],
    "parameters": {
      "pattern": "nextjs-pages-router"
    }
  },
  "artifacts": {
    "changelog": "changelog.md",
    "adr": "adr.md"
  },
  "changes": {
    "added": [
      "package.json",
      "tsconfig.json",
      "next.config.ts",
      "tailwind.config.ts",
      "postcss.config.js",
      "jest.config.ts",
      "next-env.d.ts",
      "src/app/layout.tsx",
      "src/app/page.tsx",
      "src/app/globals.css",
      "src/app/error.tsx",
      "src/app/not-found.tsx",
      "src/app/loading.tsx",
      "src/app/global-error.tsx",
      "src/app/(wizard)/register/layout.tsx",
      "src/app/(wizard)/register/page.tsx",
      "src/app/(wizard)/register/account/page.tsx",
      "src/app/(wizard)/register/details/page.tsx",
      "src/app/(wizard)/register/address/page.tsx",
      "src/app/(wizard)/register/preferences/page.tsx",
      "src/app/(wizard)/register/review/page.tsx",
      "src/app/(wizard)/register/actions.ts",
      "src/app/verify/email/page.tsx",
      "src/app/verify/phone/page.tsx",
      "src/app/api/health/route.ts",
      "src/app/api/customers/route.ts",
      "src/app/api/customers/verify-email/route.ts",
      "src/app/api/customers/verify-phone/route.ts",
      "src/app/api/geo/countries/route.ts",
      "src/app/api/geo/regions/route.ts",
      "src/components/ui/ProductList.tsx",
      "src/services/catalog.ts",
      "src/services/content.ts",
      "src/services/customer.ts",
      "src/services/geo.ts",
      "src/lib/providers/registration-progress-provider.tsx",
      "tests/jest.setup.ts",
      "tests/routes/home.test.tsx",
      "tests/routes/register-intro.test.tsx",
      "tests/routes/account.test.tsx",
      "tests/routes/details.test.tsx",
      "tests/routes/address.test.tsx",
      "tests/routes/preferences.test.tsx",
      "tests/routes/review.test.tsx",
      "tests/routes/verify-email.test.tsx",
      "tests/routes/verify-phone.test.tsx",
      "changelog.md",
      "ai/agentic-pipeline/turns/1/changelog.md",
      "ai/agentic-pipeline/turns/1/adr.md",
      "ai/agentic-pipeline/turns/1/manifest.json"
    ],
    "modified": [
      ".gitignore",
      "README.md"
    ],
    "deleted": []
  }
}


```

File: project_root/changelog.md

```text

# Project Changelog

## 2025-10-04
- Turn 1: Initialized Customer Registration wizard scaffold with App Router routes, services, and tests.


```

File: project_root/jest.config.ts

```text

/**
 * App: Customer Registration
 * Package: config
 * File: jest.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: config
 * Description: Jest configuration integrating next/jest for testing wizard components.
 */
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});

const config = createJestConfig({
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
});

export default config;


```

File: project_root/next-env.d.ts

```text

/**
 * App: Customer Registration
 * Package: types
 * File: next-env.d.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Type definitions required by Next.js for the customer registration wizard.
 */
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited


```

File: project_root/next.config.ts

```text

/**
 * App: Customer Registration
 * Package: config
 * File: next.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: nextConfig
 * Description: Next.js configuration enabling strict mode for the customer registration wizard.
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},
};

export default nextConfig;


```

File: project_root/package.json

```text

{
  "name": "customer-registration-wizard",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest"
  },
  "dependencies": {
    "@headlessui/react": "^2.1.5",
    "@heroicons/react": "^2.1.5",
    "next": "14.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.2",
    "@testing-library/react": "^14.2.1",
    "@types/jest": "^29.5.12",
    "@types/node": "20.16.5",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.4",
    "jest": "^29.7.0",
    "next-swc": "14.2.4",
    "postcss": "^8.4.41",
    "prettier": "^3.3.3",
    "tailwindcss": "^3.4.9",
    "ts-jest": "^29.2.5",
    "typescript": "^5.5.4"
  },
  "packageManager": "pnpm@8.15.8"
}


```

File: project_root/postcss.config.js

```text

/**
 * App: Customer Registration
 * Package: config
 * File: postcss.config.js
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: module.exports
 * Description: PostCSS configuration hooking Tailwind and autoprefixer for the wizard styles.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


```

File: project_root/src/app/(wizard)/register/account/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register.account
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, AccountStepPage
 * Description: Wizard step collecting credential details for the customer account.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Account Setup | Customer Registration Wizard',
  description: 'Capture credentials and contact preferences for the customer account.',
};

const AccountStepPage = async () => {
  const content = getStepContent('/register/account');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
            />
            <p className="mt-2 text-xs text-slate-500">Use 12+ characters with a mix of letters and symbols.</p>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
            />
            <p className="mt-2 text-xs text-slate-500">We will only text important account notifications.</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link href="/register" className="text-sm text-slate-500">
            Back
          </Link>
          <Link href="/register/details" className="inline-flex">
            Save and continue
          </Link>
        </div>
      </form>
    </section>
  );
};

export default AccountStepPage;


```

File: project_root/src/app/(wizard)/register/actions.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.register
 * File: actions.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: submitRegistration
 * Description: Server action orchestrating customer creation via the domain service and cache revalidation.
 */
'use server';

import { revalidateTag } from 'next/cache';
import { createCustomer, type CustomerPayload } from '@/services/customer';

const submitRegistration = async (formData: FormData) => {
  const payload: CustomerPayload = {
    email: String(formData.get('email')),
    password: String(formData.get('password')),
    phone: formData.get('phone') ? String(formData.get('phone')) : undefined,
    profile: {
      firstName: String(formData.get('firstName')),
      lastName: String(formData.get('lastName')),
      preferredName: formData.get('preferredName') ? String(formData.get('preferredName')) : undefined,
      dateOfBirth: formData.get('dateOfBirth') ? String(formData.get('dateOfBirth')) : undefined,
      gender: formData.get('gender') ? String(formData.get('gender')) : undefined,
      pronouns: formData.get('pronouns') ? String(formData.get('pronouns')) : undefined,
    },
    address: {
      country: String(formData.get('country')),
      line1: String(formData.get('line1')),
      line2: formData.get('line2') ? String(formData.get('line2')) : undefined,
      city: String(formData.get('city')),
      region: String(formData.get('region')),
      postalCode: String(formData.get('postalCode')),
      timeZone: formData.get('timeZone') ? String(formData.get('timeZone')) : undefined,
    },
    preferences: {
      language: String(formData.get('language')),
      communication: {
        email: formData.get('prefersEmail') === 'on',
        sms: formData.get('prefersSms') === 'on',
      },
      marketingOptIn: formData.get('marketingOptIn') === 'on',
    },
    consents: {
      termsAccepted: formData.get('termsAccepted') === 'on',
      privacyAccepted: formData.get('privacyAccepted') === 'on',
      ageConfirmed: formData.get('ageConfirmed') === 'on',
    },
  };

  await createCustomer(payload);
  revalidateTag('registrations');
  return { status: 'success' };
};

export { submitRegistration };


```

File: project_root/src/app/(wizard)/register/address/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register.address
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, AddressStepPage
 * Description: Wizard step collecting address details with geo data sourced from mocked APIs.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchCountries, fetchRegions } from '@/services/geo';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Address | Customer Registration Wizard',
  description: 'Enter the customer’s primary address with region-specific options.',
};

const AddressStepPage = async () => {
  const [content, countries, regions] = await Promise.all([
    getStepContent('/register/address'),
    fetchCountries(),
    fetchRegions('US'),
  ]);

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-slate-700">
              Country
            </label>
            <select id="country" name="country" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2">
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="line1" className="block text-sm font-medium text-slate-700">
              Address line 1
            </label>
            <input id="line1" name="line1" type="text" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
        </div>
        <div>
          <label htmlFor="line2" className="block text-sm font-medium text-slate-700">
            Address line 2 (optional)
          </label>
          <input id="line2" name="line2" type="text" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <div className="grid gap-6 sm:grid-cols-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-slate-700">
              City
            </label>
            <input id="city" name="city" type="text" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-slate-700">
              State / Region
            </label>
            <select id="region" name="region" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2">
              {regions.map((region) => (
                <option key={region.code} value={region.code}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-slate-700">
              Postal code
            </label>
            <input id="postalCode" name="postalCode" type="text" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="timeZone" className="block text-sm font-medium text-slate-700">
              Time zone (optional)
            </label>
            <input id="timeZone" name="timeZone" type="text" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link href="/register/details" className="text-sm text-slate-500">
            Back
          </Link>
          <Link href="/register/preferences" className="inline-flex">
            Save and continue
          </Link>
        </div>
      </form>
    </section>
  );
};

export default AddressStepPage;


```

File: project_root/src/app/(wizard)/register/details/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register.details
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, DetailsStepPage
 * Description: Wizard step for capturing personal profile information from the customer.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Personal Details | Customer Registration Wizard',
  description: 'Collect name, pronouns, and optional demographic data for the customer profile.',
};

const DetailsStepPage = async () => {
  const content = getStepContent('/register/details');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
              Legal first name
            </label>
            <input id="firstName" name="firstName" type="text" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="middleName" className="block text-sm font-medium text-slate-700">
              Middle name (optional)
            </label>
            <input id="middleName" name="middleName" type="text" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
              Legal last name
            </label>
            <input id="lastName" name="lastName" type="text" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="preferredName" className="block text-sm font-medium text-slate-700">
              Preferred name (optional)
            </label>
            <input id="preferredName" name="preferredName" type="text" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-slate-700">
              Date of birth
            </label>
            <input id="dateOfBirth" name="dateOfBirth" type="date" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="pronouns" className="block text-sm font-medium text-slate-700">
              Pronouns
            </label>
            <select id="pronouns" name="pronouns" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2">
              <option value="">Select pronouns</option>
              <option value="she-her">She / Her</option>
              <option value="he-him">He / Him</option>
              <option value="they-them">They / Them</option>
              <option value="self-described">Self described</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link href="/register/account" className="text-sm text-slate-500">
            Back
          </Link>
          <Link href="/register/address" className="inline-flex">
            Save and continue
          </Link>
        </div>
      </form>
    </section>
  );
};

export default DetailsStepPage;


```

File: project_root/src/app/(wizard)/register/layout.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: RegisterLayout
 * Description: Wizard layout providing progress overview and shared navigation for registration steps.
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRegistrationProgress } from '@/lib/providers/registration-progress-provider';

const steps = [
  { href: '/register', label: 'Welcome', key: 'welcome' },
  { href: '/register/account', label: 'Account', key: 'account' },
  { href: '/register/details', label: 'Personal details', key: 'details' },
  { href: '/register/address', label: 'Address', key: 'address' },
  { href: '/register/preferences', label: 'Preferences', key: 'preferences' },
  { href: '/register/review', label: 'Review', key: 'review' },
] as const;

interface RegisterLayoutProps {
  readonly children: React.ReactNode;
}

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
  const pathname = usePathname();
  const { completeStep, currentStep } = useRegistrationProgress();

  useEffect(() => {
    const current = steps.find((step) => step.href === pathname);
    if (current) {
      completeStep(current.key as typeof steps[number]['key']);
    }
  }, [pathname, completeStep]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
      <nav className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-sm font-semibold uppercase text-slate-500">Registration steps</h2>
        <ol className="mt-4 space-y-3">
          {steps.map((step, index) => {
            const active = pathname === step.href;
            return (
              <li key={step.href} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold ${
                    active ? 'border-brand-500 bg-brand-100 text-brand-700' : 'border-slate-200 text-slate-500'
                  }`}
                >
                  {index + 1}
                </span>
                <Link
                  href={step.href}
                  className={
                    active
                      ? 'text-sm font-medium text-brand-700'
                      : 'text-sm font-medium text-slate-500 hover:text-slate-700'
                  }
                >
                  {step.label}
                </Link>
              </li>
            );
          })}
        </ol>
        <p className="mt-6 text-xs text-slate-400">Current step: {currentStep}</p>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default RegisterLayout;


```

File: project_root/src/app/(wizard)/register/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, RegisterIntroPage
 * Description: Entry step outlining requirements before the customer starts the registration wizard.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Register | Customer Registration Wizard',
  description: 'Understand what information is needed to complete your customer registration.',
};

const RegisterIntroPage = async () => {
  const content = getStepContent('/register');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {content.points?.map((point) => (
          <li key={point} className="rounded-lg border border-slate-200 p-4 text-sm text-slate-600">
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
        <div className="text-xs text-slate-400">Save progress automatically across steps.</div>
        <Link href="/register/account" className="inline-flex">
          Continue to account
        </Link>
      </div>
    </section>
  );
};

export default RegisterIntroPage;


```

File: project_root/src/app/(wizard)/register/preferences/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register.preferences
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, PreferencesStepPage
 * Description: Wizard step configuring language, communication, and consent settings.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Preferences | Customer Registration Wizard',
  description: 'Select language, marketing consent, and legal acknowledgements.',
};

const PreferencesStepPage = async () => {
  const content = getStepContent('/register/preferences');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-6">
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-slate-700">
            Preferred language
          </label>
          <select id="language" name="language" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-slate-700">Communication channels</legend>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" name="prefersEmail" defaultChecked className="rounded border-slate-300" />
            Email updates
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" name="prefersSms" className="rounded border-slate-300" />
            SMS updates
          </label>
        </fieldset>
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-slate-700">Consents</legend>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="termsAccepted" required className="mt-1 rounded border-slate-300" />
            <span>I agree to the Terms of Service.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="privacyAccepted" required className="mt-1 rounded border-slate-300" />
            <span>I agree to the Privacy Policy.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="marketingOptIn" className="mt-1 rounded border-slate-300" />
            <span>Send me product tips and occasional marketing updates.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="ageConfirmed" required className="mt-1 rounded border-slate-300" />
            <span>I confirm that I am of legal age to register.</span>
          </label>
        </fieldset>
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link href="/register/address" className="text-sm text-slate-500">
            Back
          </Link>
          <Link href="/register/review" className="inline-flex">
            Save and continue
          </Link>
        </div>
      </form>
    </section>
  );
};

export default PreferencesStepPage;


```

File: project_root/src/app/(wizard)/register/review/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.register.review
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, ReviewStepPage
 * Description: Final wizard step summarizing inputs and submitting via server action.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { submitRegistration } from '@/app/(wizard)/register/actions';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Review & Submit | Customer Registration Wizard',
  description: 'Review captured information and create the customer record.',
};

const ReviewStepPage = async () => {
  const content = getStepContent('/register/review');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="space-y-3 rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold uppercase text-slate-500">Account</h3>
          <p className="text-sm text-slate-600">Email, password, and phone number provided in previous steps.</p>
          <Link href="/register/account" className="text-sm font-medium text-brand-600">
            Edit account information
          </Link>
        </article>
        <article className="space-y-3 rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold uppercase text-slate-500">Personal details</h3>
          <p className="text-sm text-slate-600">Legal name, preferred name, and pronouns have been captured.</p>
          <Link href="/register/details" className="text-sm font-medium text-brand-600">
            Edit personal details
          </Link>
        </article>
        <article className="space-y-3 rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold uppercase text-slate-500">Address</h3>
          <p className="text-sm text-slate-600">Primary address and time zone set for communication scheduling.</p>
          <Link href="/register/address" className="text-sm font-medium text-brand-600">
            Edit address
          </Link>
        </article>
        <article className="space-y-3 rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold uppercase text-slate-500">Preferences & consents</h3>
          <p className="text-sm text-slate-600">Marketing and legal consents recorded with timestamps at submission.</p>
          <Link href="/register/preferences" className="text-sm font-medium text-brand-600">
            Edit preferences
          </Link>
        </article>
      </div>
      <form action={submitRegistration} className="mt-8 space-y-4">
        <input type="hidden" name="email" value="sample@example.com" />
        <input type="hidden" name="password" value="StrongPass!234" />
        <input type="hidden" name="firstName" value="Sample" />
        <input type="hidden" name="lastName" value="Customer" />
        <input type="hidden" name="country" value="US" />
        <input type="hidden" name="line1" value="123 Market Street" />
        <input type="hidden" name="city" value="San Francisco" />
        <input type="hidden" name="region" value="CA" />
        <input type="hidden" name="postalCode" value="94105" />
        <input type="hidden" name="language" value="en" />
        <input type="hidden" name="prefersEmail" value="on" />
        <input type="hidden" name="termsAccepted" value="on" />
        <input type="hidden" name="privacyAccepted" value="on" />
        <input type="hidden" name="ageConfirmed" value="on" />
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link href="/register/preferences" className="text-sm text-slate-500">
            Back
          </Link>
          <button type="submit">Submit registration</button>
        </div>
      </form>
    </section>
  );
};

export default ReviewStepPage;


```

File: project_root/src/app/api/customers/route.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.api.customers
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: POST
 * Description: Mock customer creation endpoint returning a sample identifier.
 */
import { NextResponse } from 'next/server';

const POST = async () => NextResponse.json({ customerId: 'c_123' }, { status: 201 });

export { POST };


```

File: project_root/src/app/api/customers/verify-email/route.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.api.customers.verify-email
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: POST
 * Description: Mock endpoint confirming email verification requests.
 */
import { NextResponse } from 'next/server';

const POST = async () => new NextResponse(null, { status: 204 });

export { POST };


```

File: project_root/src/app/api/customers/verify-phone/route.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.api.customers.verify-phone
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: POST
 * Description: Mock endpoint accepting SMS verification codes for customer accounts.
 */
import { NextResponse } from 'next/server';

const POST = async () => new NextResponse(null, { status: 204 });

export { POST };


```

File: project_root/src/app/api/geo/countries/route.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.api.geo.countries
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GET
 * Description: Mock endpoint returning supported countries for address selection.
 */
import { NextResponse } from 'next/server';

const GET = async () => NextResponse.json(['US', 'CA', 'GB', 'DE']);

export { GET };


```

File: project_root/src/app/api/geo/regions/route.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.api.geo.regions
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GET
 * Description: Mock endpoint returning regions for the requested country to support address forms.
 */
import { NextRequest, NextResponse } from 'next/server';

const GET = async (request: NextRequest) => {
  const country = request.nextUrl.searchParams.get('country') ?? 'US';
  const regions = [
    { country: 'US', code: 'CA', name: 'California' },
    { country: 'US', code: 'NY', name: 'New York' },
    { country: 'CA', code: 'ON', name: 'Ontario' },
  ].filter((region) => region.country === country);
  return NextResponse.json(regions);
};

export { GET };


```

File: project_root/src/app/api/health/route.ts

```text

/**
 * App: Customer Registration
 * Package: src.app.api.health
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GET
 * Description: Health check endpoint returning operational status for uptime probes.
 */
import { NextResponse } from 'next/server';

const GET = async () => NextResponse.json({ status: 'ok' });

export { GET };


```

File: project_root/src/app/error.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app
 * File: error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: ErrorBoundary
 * Description: Global error boundary presenting a retry affordance for unexpected failures.
 */
'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorBoundaryProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-800">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <p className="mt-2 text-sm">Please try again or contact support if the issue persists.</p>
      <button type="button" className="mt-4 bg-red-600 hover:bg-red-700" onClick={reset}>
        Retry
      </button>
    </div>
  );
};

export default ErrorBoundary;


```

File: project_root/src/app/global-error.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app
 * File: global-error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GlobalError
 * Description: Global error boundary ensuring fatal rendering issues surface a friendly message.
 */
'use client';

interface GlobalErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

const GlobalError = ({ reset }: GlobalErrorProps) => (
  <html lang="en">
    <body className="flex min-h-screen items-center justify-center bg-red-50">
      <div className="rounded-lg border border-red-200 bg-white p-8 text-center text-red-700 shadow-sm">
        <h1 className="text-2xl font-semibold">We hit a snag</h1>
        <p className="mt-2 text-sm">Please refresh the page. If the problem continues, contact support.</p>
        <button type="button" className="mt-4 bg-red-600 hover:bg-red-700" onClick={reset}>
          Try again
        </button>
      </div>
    </body>
  </html>
);

export default GlobalError;


```

File: project_root/src/app/globals.css

```text

/*
 * App: Customer Registration
 * Package: src.app
 * File: globals.css
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Global Tailwind and design tokens for the customer registration wizard.
 */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body {
  @apply bg-slate-50 text-slate-900 antialiased;
}

a {
  @apply text-brand-600 hover:text-brand-700;
}

button {
  @apply rounded-md bg-brand-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2;
}


```

File: project_root/src/app/layout.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: metadata, RootLayout
 * Description: Root layout establishing global metadata, fonts, and providers for the wizard.
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RegistrationProgressProvider } from '@/lib/providers/registration-progress-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Customer Registration Wizard',
  description: 'Multi-step onboarding experience for new customers.',
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className="bg-slate-50">
    <body className={`${inter.className} min-h-screen bg-slate-50`}> 
      <RegistrationProgressProvider>
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-8">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-500">Acme Services</p>
              <h1 className="text-2xl font-bold text-slate-900">Customer Registration</h1>
            </div>
            <span className="rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Secure Onboarding
            </span>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 border-t border-slate-200 pt-4 text-sm text-slate-500">
            <p>&copy; {new Date().getUTCFullYear()} Acme Services. All rights reserved.</p>
          </footer>
        </div>
      </RegistrationProgressProvider>
    </body>
  </html>
);

export default RootLayout;


```

File: project_root/src/app/loading.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app
 * File: loading.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: Loading
 * Description: Root loading indicator for suspenseful transitions across the wizard.
 */
const Loading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loading;


```

File: project_root/src/app/not-found.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app
 * File: not-found.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: NotFound
 * Description: Not found boundary guiding users back to the registration wizard.
 */
import Link from 'next/link';

const NotFound = () => (
  <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
    <h2 className="text-xl font-semibold text-slate-900">Page not found</h2>
    <p className="mt-2 text-sm text-slate-500">
      The requested page could not be located. Return to the wizard to continue registration.
    </p>
    <Link href="/register" className="mt-4 inline-flex">
      Back to registration
    </Link>
  </div>
);

export default NotFound;


```

File: project_root/src/app/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: revalidate, metadata, HomePage
 * Description: Landing page presenting the benefits of the customer registration wizard.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ProductList } from '@/components/ui/ProductList';
import { getLandingContent } from '@/services/content';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Welcome | Customer Registration Wizard',
  description: 'Begin onboarding with a streamlined, multi-step customer registration experience.',
};

const HomePage = async () => {
  const content = getLandingContent();

  return (
    <div className="space-y-12">
      <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">{content.title}</h2>
            <p className="text-lg text-slate-600">{content.description}</p>
            <ul className="space-y-2 text-sm text-slate-500">
              {content.points?.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 rounded-lg bg-slate-900 p-6 text-white shadow-lg">
            <p className="text-sm uppercase tracking-wide text-slate-300">Get started</p>
            <p className="text-lg font-semibold">Complete your registration in under 5 minutes.</p>
            <Link
              href="/register"
              className="rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Start registration
            </Link>
            <p className="text-xs text-slate-300">No credit card required.</p>
          </div>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default HomePage;


```

File: project_root/src/app/verify/email/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.verify.email
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, EmailVerificationPage
 * Description: Verification route guiding users through confirming their email address.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVerificationContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Verify Email | Customer Registration Wizard',
  description: 'Confirm your email address to finalize your new account.',
};

const EmailVerificationPage = async () => {
  const content = getVerificationContent('/verify/email');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <p>Didn’t get the email? Check your spam folder or request another verification link.</p>
        <button type="button">Resend verification email</button>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <Link href="/register">Return to registration</Link>
      </div>
    </section>
  );
};

export default EmailVerificationPage;


```

File: project_root/src/app/verify/phone/page.tsx

```text

/**
 * App: Customer Registration
 * Package: src.app.verify.phone
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, PhoneVerificationPage
 * Description: Verification route capturing the SMS code for phone number confirmation.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVerificationContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Verify Phone | Customer Registration Wizard',
  description: 'Enter the SMS code sent to your phone to complete verification.',
};

const PhoneVerificationPage = async () => {
  const content = getVerificationContent('/verify/phone');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700" htmlFor="code">
          Verification code
        </label>
        <input
          id="code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-center text-lg tracking-widest"
        />
        <button type="submit">Verify code</button>
      </form>
      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <Link href="/register">Return to registration</Link>
      </div>
    </section>
  );
};

export default PhoneVerificationPage;


```

File: project_root/src/components/ui/ProductList.tsx

```text

/**
 * App: Customer Registration
 * Package: src.components.ui
 * File: ProductList.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: ProductList
 * Description: Presentational component highlighting complementary products during registration.
 */
import { fetchFeaturedProducts } from '@/services/catalog';

const ProductList = async () => {
  const products = await fetchFeaturedProducts();

  return (
    <section aria-labelledby="product-list" className="mt-12">
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="product-list" className="text-lg font-semibold text-slate-900">
              Enhance your onboarding stack
            </h2>
            <p className="text-sm text-slate-500">
              Explore add-ons that pair well with the registration wizard.
            </p>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-brand-500">Recommended</span>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <li key={product.id} className="flex flex-col gap-2 rounded-lg border border-slate-200 p-4">
              <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-600">{product.description}</p>
              <span className="mt-auto text-sm font-medium text-brand-600">{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { ProductList };


```

File: project_root/src/lib/providers/registration-progress-provider.tsx

```text

/**
 * App: Customer Registration
 * Package: src.lib.providers
 * File: registration-progress-provider.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: RegistrationProgressContext, RegistrationProgressProvider, useRegistrationProgress
 * Description: React context tracking the wizard step progression for client-only UI affordances.
 */
'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type RegistrationStep =
  | 'welcome'
  | 'account'
  | 'details'
  | 'address'
  | 'preferences'
  | 'review';

interface RegistrationProgressContextValue {
  currentStep: RegistrationStep;
  completeStep: (step: RegistrationStep) => void;
  completedSteps: Set<RegistrationStep>;
}

const RegistrationProgressContext = createContext<RegistrationProgressContextValue | undefined>(
  undefined,
);

interface RegistrationProgressProviderProps {
  readonly children: React.ReactNode;
}

const RegistrationProgressProvider = ({ children }: RegistrationProgressProviderProps) => {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('welcome');
  const [completedSteps, setCompletedSteps] = useState<Set<RegistrationStep>>(new Set());

  const completeStep = useCallback((step: RegistrationStep) => {
    setCompletedSteps((prev) => {
      if (prev.has(step)) {
        return prev;
      }
      const next = new Set(prev);
      next.add(step);
      return next;
    });
    setCurrentStep((prev) => (prev === step ? prev : step));
  }, []);

  const value = useMemo<RegistrationProgressContextValue>(() => {
    return {
      currentStep,
      completeStep,
      completedSteps,
    };
  }, [completeStep, completedSteps, currentStep]);

  return (
    <RegistrationProgressContext.Provider value={value}>
      {children}
    </RegistrationProgressContext.Provider>
  );
};

const useRegistrationProgress = () => {
  const context = useContext(RegistrationProgressContext);
  if (!context) {
    throw new Error('useRegistrationProgress must be used within RegistrationProgressProvider');
  }
  return context;
};

export { RegistrationProgressContext, RegistrationProgressProvider, useRegistrationProgress };


```

File: project_root/src/services/catalog.ts

```text

/**
 * App: Customer Registration
 * Package: src.services
 * File: catalog.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: fetchFeaturedProducts
 * Description: Example catalog service demonstrating server-side data fetching conventions.
 */
interface Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
}

const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return [
    {
      id: 'identity-verification',
      name: 'Identity Verification',
      description: 'Real-time identity checks with configurable compliance policies.',
      price: 'From $0.02 per verification'
    },
    {
      id: 'customer-insights',
      name: 'Customer Insights',
      description: '360º view of customer engagement and lifecycle data.',
      price: 'Plans starting at $49/mo'
    },
    {
      id: 'communications',
      name: 'Communications Hub',
      description: 'Multi-channel messaging orchestration with consent management.',
      price: 'Usage-based pricing'
    }
  ];
};

export type { Product };
export { fetchFeaturedProducts };


```

File: project_root/src/services/content.ts

```text

/**
 * App: Customer Registration
 * Package: src.services
 * File: content.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: getLandingContent, getStepContent, getVerificationContent
 * Description: Service providing mock content for wizard routes simulating CMS-driven copy.
 */
type WizardStepKey =
  | '/'
  | '/register'
  | '/register/account'
  | '/register/details'
  | '/register/address'
  | '/register/preferences'
  | '/register/review'
  | '/verify/email'
  | '/verify/phone';

interface StepContent {
  title: string;
  description: string;
  points?: string[];
}

const contentMap: Record<WizardStepKey, StepContent> = {
  '/': {
    title: 'Welcome to the Customer Registration Wizard',
    description:
      'Create your secure account, add your personal details, and tailor communication preferences in minutes.',
    points: [
      'Progress indicator keeps you informed at every step',
      'Server-validated forms ensure accurate data',
      'Accessible experience optimized for keyboard navigation'
    ]
  },
  '/register': {
    title: 'Let’s get started',
    description: 'Review what you will need to complete the registration process.',
    points: ['Account credentials', 'Personal details', 'Preferred communication settings']
  },
  '/register/account': {
    title: 'Create your account credentials',
    description: 'Use a strong password and optionally add your phone number for SMS updates.',
  },
  '/register/details': {
    title: 'Tell us about yourself',
    description: 'Provide your legal name and optional demographic information so we can personalize your experience.',
  },
  '/register/address': {
    title: 'Where can we reach you?',
    description: 'Share your primary address to help us route communications and services.',
  },
  '/register/preferences': {
    title: 'Set your preferences',
    description: 'Choose your language, communication channels, and required consents.',
  },
  '/register/review': {
    title: 'Review and submit',
    description: 'Confirm your details before creating your account.',
  },
  '/verify/email': {
    title: 'Verify your email address',
    description: 'We sent a link to your inbox. Follow it to activate your account.',
  },
  '/verify/phone': {
    title: 'Verify your phone number',
    description: 'Enter the 6-digit code we sent to your mobile device.',
  },
};

const getLandingContent = () => contentMap['/'];

const getStepContent = (path: Exclude<WizardStepKey, '/'>) => contentMap[path];

const getVerificationContent = (path: '/verify/email' | '/verify/phone') => contentMap[path];

export { getLandingContent, getStepContent, getVerificationContent };


```

File: project_root/src/services/customer.ts

```text

/**
 * App: Customer Registration
 * Package: src.services
 * File: customer.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: createCustomer, verifyEmail, verifyPhone
 * Description: Service layer for interacting with the customer registration API endpoints.
 */
const API_BASE = process.env.API_BASE ?? 'http://localhost:3000';

interface CustomerPayload {
  readonly email: string;
  readonly password: string;
  readonly phone?: string;
  readonly profile: {
    readonly firstName: string;
    readonly lastName: string;
    readonly preferredName?: string;
    readonly dateOfBirth?: string;
    readonly gender?: string;
    readonly pronouns?: string;
  };
  readonly address: {
    readonly country: string;
    readonly line1: string;
    readonly line2?: string;
    readonly city: string;
    readonly region: string;
    readonly postalCode: string;
    readonly timeZone?: string;
  };
  readonly preferences: {
    readonly language: string;
    readonly communication: {
      readonly email: boolean;
      readonly sms: boolean;
    };
    readonly marketingOptIn: boolean;
  };
  readonly consents: {
    readonly termsAccepted: boolean;
    readonly privacyAccepted: boolean;
    readonly ageConfirmed: boolean;
  };
}

interface CreateCustomerResponse {
  readonly customerId: string;
}

const createCustomer = async (payload: CustomerPayload): Promise<CreateCustomerResponse> => {
  const response = await fetch(`${API_BASE}/api/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to create customer');
  }

  return response.json();
};

const verifyEmail = async (token: string): Promise<void> => {
  const response = await fetch(`${API_BASE}/api/customers/verify-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to verify email');
  }
};

const verifyPhone = async (phone: string, code: string): Promise<void> => {
  const response = await fetch(`${API_BASE}/api/customers/verify-phone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone, code }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to verify phone');
  }
};

export type { CustomerPayload, CreateCustomerResponse };
export { createCustomer, verifyEmail, verifyPhone };


```

File: project_root/src/services/geo.ts

```text

/**
 * App: Customer Registration
 * Package: src.services
 * File: geo.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: fetchCountries, fetchRegions
 * Description: Geo lookup helpers fetching mock data from local API routes for addresses.
 */
const API_BASE = process.env.API_BASE ?? 'http://localhost:3000';

interface RegionResponse {
  readonly country: string;
  readonly code: string;
  readonly name: string;
}

const fetchCountries = async (): Promise<string[]> => {
  const response = await fetch(`${API_BASE}/api/geo/countries`, {
    method: 'GET',
    next: {
      revalidate: 3600,
      tags: ['geo']
    }
  });

  if (!response.ok) {
    throw new Error('Failed to load country list');
  }

  return response.json();
};

const fetchRegions = async (country: string): Promise<RegionResponse[]> => {
  const response = await fetch(`${API_BASE}/api/geo/regions?country=${country}`, {
    method: 'GET',
    next: {
      revalidate: 1800,
      tags: ['geo', `geo-${country}`]
    }
  });

  if (!response.ok) {
    throw new Error('Failed to load region list');
  }

  return response.json();
};

export type { RegionResponse };
export { fetchCountries, fetchRegions };


```

File: project_root/tailwind.config.ts

```text

/**
 * App: Customer Registration
 * Package: config
 * File: tailwind.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: config
 * Description: Tailwind CSS configuration defining content paths and theme extensions for the wizard UI.
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f5ff',
          100: '#e6ebff',
          200: '#c4cdff',
          300: '#9eacff',
          400: '#7486ff',
          500: '#4a5fff',
          600: '#3649db',
          700: '#2736aa',
          800: '#1b2579',
          900: '#10174f'
        }
      }
    }
  },
  plugins: [],
};

export default config;


```

File: project_root/tests/jest.setup.ts

```text

/**
 * App: Customer Registration
 * Package: tests.setup
 * File: jest.setup.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Jest setup extending expect with Testing Library matchers for the wizard tests.
 */
import '@testing-library/jest-dom/extend-expect';


```

File: project_root/tests/routes/account.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: account.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the account step renders form inputs.
 */
import { render, screen } from '@testing-library/react';
import AccountStepPage from '@/app/(wizard)/register/account/page';

describe('AccountStepPage', () => {
  it('renders email and password inputs', async () => {
    render(await AccountStepPage());
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/address.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: address.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the address step renders geo selectors.
 */
import { render, screen } from '@testing-library/react';
import AddressStepPage from '@/app/(wizard)/register/address/page';

describe('AddressStepPage', () => {
  it('renders country and region selectors', async () => {
    render(await AddressStepPage());
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/state \/ region/i)).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/details.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: details.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the personal details step renders required fields.
 */
import { render, screen } from '@testing-library/react';
import DetailsStepPage from '@/app/(wizard)/register/details/page';

describe('DetailsStepPage', () => {
  it('renders first and last name inputs', async () => {
    render(await DetailsStepPage());
    expect(screen.getByLabelText(/legal first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/legal last name/i)).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/home.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: home.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test verifying the landing page renders hero content and CTA.
 */
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders hero headline and primary call-to-action', async () => {
    render(await HomePage());
    expect(
      screen.getByRole('heading', { name: /customer registration wizard/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start registration/i })).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/preferences.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: preferences.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the preferences step renders consent checkboxes.
 */
import { render, screen } from '@testing-library/react';
import PreferencesStepPage from '@/app/(wizard)/register/preferences/page';

describe('PreferencesStepPage', () => {
  it('renders required consent checkboxes', async () => {
    render(await PreferencesStepPage());
    expect(screen.getByLabelText(/terms of service/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/privacy policy/i)).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/register-intro.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: register-intro.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the register intro step renders overview content.
 */
import { render, screen } from '@testing-library/react';
import RegisterIntroPage from '@/app/(wizard)/register/page';

describe('RegisterIntroPage', () => {
  it('shows the step description and next link', async () => {
    render(await RegisterIntroPage());
    expect(screen.getByText(/what you will need/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /continue to account/i })).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/review.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: review.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the review step renders summary cards and submit action.
 */
import { render, screen } from '@testing-library/react';
import ReviewStepPage from '@/app/(wizard)/register/review/page';

describe('ReviewStepPage', () => {
  it('renders submit button', async () => {
    render(await ReviewStepPage());
    expect(screen.getByRole('button', { name: /submit registration/i })).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/verify-email.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: verify-email.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the email verification page renders resend affordance.
 */
import { render, screen } from '@testing-library/react';
import EmailVerificationPage from '@/app/verify/email/page';

describe('EmailVerificationPage', () => {
  it('renders resend button', async () => {
    render(await EmailVerificationPage());
    expect(screen.getByRole('button', { name: /resend verification email/i })).toBeInTheDocument();
  });
});


```

File: project_root/tests/routes/verify-phone.test.tsx

```text

/**
 * App: Customer Registration
 * Package: tests.routes
 * File: verify-phone.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the phone verification page renders the code form.
 */
import { render, screen } from '@testing-library/react';
import PhoneVerificationPage from '@/app/verify/phone/page';

describe('PhoneVerificationPage', () => {
  it('renders verification code input', async () => {
    render(await PhoneVerificationPage());
    expect(screen.getByLabelText(/verification code/i)).toBeInTheDocument();
  });
});


```

File: project_root/tsconfig.json

```text

{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["jest", "node"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.cjs", "**/*.mjs"],
  "exclude": ["node_modules"]
}


```

