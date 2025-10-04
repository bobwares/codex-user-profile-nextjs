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
