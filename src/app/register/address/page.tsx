/**
 * App: Customer Registration
 * Package: app/register
 * File: address/page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Address capture step with country-specific region selection.
 */
import { RegistrationProgress } from '@/components/ui/RegistrationProgress';
import { FormSection } from '@/components/ui/FormSection';
import { getRegistrationData } from '@/lib/registrationSession';
import { listCountries, listRegions } from '@/services/geo';
import { submitAddress } from '../actions';

export default async function AddressStep({
  searchParams
}: {
  searchParams: { error?: string; country?: string };
}): Promise<JSX.Element> {
  const registration = await getRegistrationData();
  const address = registration?.address;
  const country = searchParams.country ?? address?.country ?? 'US';
  const [countries, regions] = await Promise.all([listCountries(), listRegions(country)]);

  return (
    <div className="py-10">
      <RegistrationProgress activeStep="address" />
      <FormSection
        title="Address information"
        description="Provide the primary address associated with this customer."
      >
        <form action={submitAddress} className="space-y-5">
          {searchParams?.error ? (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {searchParams.error}
            </p>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span>Country</span>
              <select name="country" defaultValue={country} required>
                {countries.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1">
              <span>Region / State</span>
              <select name="region" defaultValue={address?.region ?? ''} required>
                <option value="" disabled>
                  Select region
                </option>
                {regions.map((region) => (
                  <option key={region.code} value={region.code}>
                    {region.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="space-y-1">
            <span>Address line 1</span>
            <input type="text" name="line1" defaultValue={address?.line1 ?? ''} required />
          </label>
          <label className="space-y-1">
            <span>Address line 2</span>
            <input type="text" name="line2" defaultValue={address?.line2 ?? ''} />
          </label>
          <div className="grid gap-4 md:grid-cols-3">
            <label className="space-y-1">
              <span>City</span>
              <input type="text" name="city" defaultValue={address?.city ?? ''} required />
            </label>
            <label className="space-y-1">
              <span>Postal code</span>
              <input type="text" name="postalCode" defaultValue={address?.postalCode ?? ''} required />
            </label>
            <label className="space-y-1">
              <span>Time zone</span>
              <input type="text" name="timeZone" defaultValue={address?.timeZone ?? ''} placeholder="Optional" />
            </label>
          </div>
          <div className="flex justify-between">
            <a className="inline-flex items-center text-brand-600" href="/register/details">
              Back
            </a>
            <button type="submit">Save and continue</button>
          </div>
        </form>
      </FormSection>
    </div>
  );
}
