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
