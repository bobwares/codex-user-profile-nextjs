/**
 * App: Customer Registration
 * Package: app/register
 * File: details/page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Personal details step capturing identity information.
 */
import { RegistrationProgress } from '@/components/ui/RegistrationProgress';
import { FormSection } from '@/components/ui/FormSection';
import { getRegistrationData } from '@/lib/registrationSession';
import { submitPersonalDetails } from '../actions';

export default async function PersonalDetailsStep({
  searchParams
}: {
  searchParams: { error?: string };
}): Promise<JSX.Element> {
  const registration = await getRegistrationData();
  const personal = registration?.personal;

  return (
    <div className="py-10">
      <RegistrationProgress activeStep="details" />
      <FormSection
        title="Personal details"
        description="Capture legal identity information and how we should address you."
      >
        <form action={submitPersonalDetails} className="space-y-5">
          {searchParams?.error ? (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {searchParams.error}
            </p>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span>First name</span>
              <input type="text" name="firstName" defaultValue={personal?.firstName ?? ''} required />
            </label>
            <label className="space-y-1">
              <span>Last name</span>
              <input type="text" name="lastName" defaultValue={personal?.lastName ?? ''} required />
            </label>
            <label className="space-y-1">
              <span>Middle name</span>
              <input type="text" name="middleName" defaultValue={personal?.middleName ?? ''} />
            </label>
            <label className="space-y-1">
              <span>Preferred name</span>
              <input type="text" name="preferredName" defaultValue={personal?.preferredName ?? ''} />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <label className="space-y-1">
              <span>Date of birth</span>
              <input type="date" name="dateOfBirth" defaultValue={personal?.dateOfBirth ?? ''} />
            </label>
            <label className="space-y-1">
              <span>Gender</span>
              <input type="text" name="gender" defaultValue={personal?.gender ?? ''} placeholder="Optional" />
            </label>
            <label className="space-y-1">
              <span>Pronouns</span>
              <input type="text" name="pronouns" defaultValue={personal?.pronouns ?? ''} placeholder="Optional" />
            </label>
          </div>
          <div className="flex justify-between">
            <a className="inline-flex items-center text-brand-600" href="/register/account">
              Back
            </a>
            <button type="submit">Save and continue</button>
          </div>
        </form>
      </FormSection>
    </div>
  );
}
