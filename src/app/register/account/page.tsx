/**
 * App: Customer Registration
 * Package: src/app/register/account
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: AccountStepPage
 * Description: Captures account credentials and optional phone number for verification.
 */
import Link from 'next/link';
import { StepLayout } from '@/components/ui/StepLayout';
import { PasswordStrengthHint } from '@/components/client/PasswordStrengthHint';

export default function AccountStepPage() {
  return (
    <StepLayout
      description="Provide your login credentials and an optional mobile number so we can secure your account."
      stepSlug="account"
      title="Create your account"
    >
      <form className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">
              Email address
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-brand-400 focus:outline-none"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="phone">
              Phone number (optional)
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-brand-400 focus:outline-none"
              id="phone"
              name="phone"
              placeholder="+1 555 123 4567"
              type="tel"
            />
            <p className="mt-1 text-xs text-slate-500">We use your phone to send verification or security alerts.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <PasswordStrengthHint inputId="password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-brand-400 focus:outline-none"
              id="confirmPassword"
              name="confirmPassword"
              required
              type="password"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Link className="text-sm text-slate-500" href="/register">
            &larr; Back
          </Link>
          <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register/details">
            Save and continue
          </Link>
        </div>
      </form>
    </StepLayout>
  );
}
