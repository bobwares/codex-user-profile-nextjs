/**
 * App: Customer Registration
 * Package: src/app/register/address
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: AddressStepPage
 * Description: Collects address details and surfaces country-specific guidance.
 */
import Link from 'next/link';
import { StepLayout } from '@/components/ui/StepLayout';
import { listCountries, listRegions } from '@/services/geo';

export default async function AddressStepPage() {
  const countries = await listCountries();
  const defaultCountry = countries.includes('US') ? 'US' : countries[0];
  const regions = defaultCountry ? await listRegions(defaultCountry) : [];

  return (
    <StepLayout
      description="Provide your primary address so we can localize your communications and fulfill jurisdictional requirements."
      stepSlug="address"
      title="Where are you located?"
    >
      <form className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="country">
              Country
            </label>
            <select className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" defaultValue={defaultCountry} id="country" name="country" required>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="timeZone">
              Time zone (optional)
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="timeZone" name="timeZone" placeholder="America/Los_Angeles" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="line1">
              Address line 1
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="line1" name="line1" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="line2">
              Address line 2 (optional)
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="line2" name="line2" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="city">
              City
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="city" name="city" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="region">
              Region / State
            </label>
            <select className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" defaultValue={regions[0]?.code ?? ''} id="region" name="region" required>
              {regions.map((region) => (
                <option key={region.code} value={region.code}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="postalCode">
              Postal code
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="postalCode" name="postalCode" required />
          </div>
        </div>
        <div className="flex justify-between">
          <Link className="text-sm text-slate-500" href="/register/details">
            &larr; Back
          </Link>
          <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register/preferences">
            Save and continue
          </Link>
        </div>
      </form>
    </StepLayout>
  );
}
