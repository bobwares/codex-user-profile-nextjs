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
