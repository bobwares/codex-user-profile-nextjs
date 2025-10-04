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
