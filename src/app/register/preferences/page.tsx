/**
 * App: Customer Registration
 * Package: app/register
 * File: preferences/page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Preferences and consent capture step.
 */
import { RegistrationProgress } from '@/components/ui/RegistrationProgress';
import { FormSection } from '@/components/ui/FormSection';
import { getRegistrationData } from '@/lib/registrationSession';
import { submitPreferences } from '../actions';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' }
];

export default async function PreferencesStep({
  searchParams
}: {
  searchParams: { error?: string };
}): Promise<JSX.Element> {
  const registration = await getRegistrationData();
  const preferences = registration?.preferences;

  return (
    <div className="py-10">
      <RegistrationProgress activeStep="preferences" />
      <FormSection
        title="Communication preferences and consents"
        description="Select how we should communicate with you and acknowledge the required policies."
      >
        <form action={submitPreferences} className="space-y-5">
          {searchParams?.error ? (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {searchParams.error}
            </p>
          ) : null}
          <label className="space-y-1">
            <span>Preferred language</span>
            <select name="language" defaultValue={preferences?.language ?? 'en'} required>
              {LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>
          </label>
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-700">Communications</legend>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="emailOptIn" defaultChecked={preferences?.emailOptIn ?? true} />
              Email updates
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="smsOptIn" defaultChecked={preferences?.smsOptIn ?? false} />
              SMS notifications
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                name="marketingOptIn"
                defaultChecked={preferences?.marketingOptIn ?? false}
              />
              Marketing emails
            </label>
          </fieldset>
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-700">Consents</legend>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="acceptTos" defaultChecked={preferences?.acceptTos ?? false} required />
              I agree to the Terms of Service.
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                name="acceptPrivacy"
                defaultChecked={preferences?.acceptPrivacy ?? false}
                required
              />
              I acknowledge the Privacy Policy.
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                name="ageConfirmed"
                defaultChecked={preferences?.ageConfirmed ?? true}
              />
              I confirm I am of legal age to consent.
            </label>
          </fieldset>
          <div className="flex justify-between">
            <a className="inline-flex items-center text-brand-600" href="/register/address">
              Back
            </a>
            <button type="submit">Review registration</button>
          </div>
        </form>
      </FormSection>
    </div>
  );
}
