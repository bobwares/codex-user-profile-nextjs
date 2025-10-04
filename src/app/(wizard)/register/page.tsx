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
