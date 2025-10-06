/**
 * App: Customer Registration
 * Package: app/register
 * File: review/page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Review and submit step summarising collected registration data.
 */
import { redirect } from 'next/navigation';

import { RegistrationProgress } from '@/components/ui/RegistrationProgress';
import { FormSection } from '@/components/ui/FormSection';
import { getRegistrationData } from '@/lib/registrationSession';
import { completeRegistration } from '../actions';

export default async function ReviewStep({
  searchParams
}: {
  searchParams: { submitted?: string; customerId?: string };
}): Promise<JSX.Element> {
  const registration = await getRegistrationData();

  if (!registration && !searchParams.submitted) {
    redirect('/register');
  }

  const hasSubmitted = searchParams.submitted === 'true';

  return (
    <div className="py-10">
      <RegistrationProgress activeStep="review" />
      <FormSection
        title="Review your registration"
        description="Confirm the information before creating the customer account."
      >
        {hasSubmitted ? (
          <div className="space-y-4">
            <p className="rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              Registration complete! Reference ID: {searchParams.customerId}
            </p>
            <a className="inline-flex items-center text-brand-600" href="/register">
              Start a new registration
            </a>
          </div>
        ) : (
          <form action={completeRegistration} className="space-y-6">
            <section>
              <h3 className="text-sm font-semibold text-slate-700">Account</h3>
              <dl className="mt-2 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-700">Email</dt>
                  <dd>{registration?.account.email}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Phone</dt>
                  <dd>{registration?.account.phone || '—'}</dd>
                </div>
              </dl>
            </section>
            <section>
              <h3 className="text-sm font-semibold text-slate-700">Personal</h3>
              <dl className="mt-2 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-700">Legal name</dt>
                  <dd>
                    {registration?.personal.firstName} {registration?.personal.middleName}{' '}
                    {registration?.personal.lastName}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Preferred name</dt>
                  <dd>{registration?.personal.preferredName || '—'}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Date of birth</dt>
                  <dd>{registration?.personal.dateOfBirth || '—'}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Pronouns</dt>
                  <dd>{registration?.personal.pronouns || '—'}</dd>
                </div>
              </dl>
            </section>
            <section>
              <h3 className="text-sm font-semibold text-slate-700">Address</h3>
              <dl className="mt-2 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-700">Street</dt>
                  <dd>
                    {registration?.address.line1}
                    {registration?.address.line2 ? `, ${registration?.address.line2}` : ''}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">City</dt>
                  <dd>{registration?.address.city}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Region</dt>
                  <dd>{registration?.address.region}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Country</dt>
                  <dd>{registration?.address.country}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Postal code</dt>
                  <dd>{registration?.address.postalCode}</dd>
                </div>
              </dl>
            </section>
            <section>
              <h3 className="text-sm font-semibold text-slate-700">Preferences</h3>
              <dl className="mt-2 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-700">Language</dt>
                  <dd>{registration?.preferences.language}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Email opt-in</dt>
                  <dd>{registration?.preferences.emailOptIn ? 'Yes' : 'No'}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">SMS opt-in</dt>
                  <dd>{registration?.preferences.smsOptIn ? 'Yes' : 'No'}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Marketing opt-in</dt>
                  <dd>{registration?.preferences.marketingOptIn ? 'Yes' : 'No'}</dd>
                </div>
              </dl>
            </section>
            <div className="flex justify-between">
              <a className="inline-flex items-center text-brand-600" href="/register/preferences">
                Back
              </a>
              <button type="submit">Submit registration</button>
            </div>
          </form>
        )}
      </FormSection>
    </div>
  );
}
