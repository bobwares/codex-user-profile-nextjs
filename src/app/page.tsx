/**
 * App: Customer Registration
 * Package: app
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Landing page introducing the registration wizard.
 */
import Link from 'next/link';

import { ProductList } from '@/components/ui/ProductList';
import { listFeaturedProducts } from '@/services/catalog';

export default async function HomePage(): Promise<JSX.Element> {
  const products = await listFeaturedProducts();

  return (
    <div className="py-16">
      <section className="rounded-3xl bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">
          Welcome to the Customer Registration platform
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Launch a multi-step onboarding flow that captures verified identity, address, and
          communication preferences in minutes. Start the wizard to begin collecting customer
          information with built-in consent capture.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link href="/register" className="inline-flex items-center">
            Start registration
          </Link>
          <Link href="/register/review" className="inline-flex items-center text-brand-600">
            Review flow overview
          </Link>
        </div>
      </section>
      <section>
        <ProductList products={products} />
      </section>
    </div>
  );
}
