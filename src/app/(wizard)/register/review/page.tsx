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
