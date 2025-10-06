/**
 * App: Customer Registration
 * Package: app/register
 * File: account/page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Account creation step capturing credentials and optional phone.
 */
import { RegistrationProgress } from '@/components/ui/RegistrationProgress';
import { FormSection } from '@/components/ui/FormSection';
import { getRegistrationData } from '@/lib/registrationSession';
import { submitAccount } from '../actions';

export default async function AccountStep({
  searchParams
}: {
  searchParams: { error?: string };
}): Promise<JSX.Element> {
  const registration = await getRegistrationData();
  const account = registration?.account;

  return (
    <div className="py-10">
      <RegistrationProgress activeStep="account" />
      <FormSection
        title="Set up your account"
        description="Provide login credentials and an optional phone number for future verification."
      >
        <form action={submitAccount} className="space-y-5">
          {searchParams?.error ? (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {searchParams.error}
            </p>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span>Email address</span>
              <input type="email" name="email" defaultValue={account?.email ?? ''} required />
            </label>
            <label className="space-y-1">
              <span>Phone number (optional)</span>
              <input type="tel" name="phone" defaultValue={account?.phone ?? ''} placeholder="+1 555 0100" />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span>Password</span>
              <input type="password" name="password" minLength={8} required />
            </label>
            <label className="space-y-1">
              <span>Confirm password</span>
              <input type="password" name="confirmPassword" minLength={8} required />
            </label>
          </div>
          <div className="flex justify-end">
            <button type="submit">Save and continue</button>
          </div>
        </form>
      </FormSection>
    </div>
  );
}
