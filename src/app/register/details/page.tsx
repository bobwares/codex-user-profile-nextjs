/**
 * App: Customer Registration
 * Package: src/app/register/details
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: PersonalDetailsPage
 * Description: Collects personal identity details for the customer profile.
 */
import Link from 'next/link';
import { StepLayout } from '@/components/ui/StepLayout';

export default function PersonalDetailsPage() {
  return (
    <StepLayout
      description="Help us personalize your experience and maintain accurate records by providing your preferred name and details."
      stepSlug="details"
      title="Share your personal details"
    >
      <form className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="firstName">
              Legal first name
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="firstName" name="firstName" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="lastName">
              Legal last name
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="lastName" name="lastName" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="preferredName">
              Preferred name (optional)
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="preferredName" name="preferredName" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="pronouns">
              Pronouns (optional)
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="pronouns" name="pronouns" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="dob">
              Date of birth (optional)
            </label>
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="dob" name="dob" type="date" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="gender">
              Gender (optional)
            </label>
            <select className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="gender" name="gender">
              <option value="">Prefer not to say</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-binary</option>
              <option value="self-describe">Self describe</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <Link className="text-sm text-slate-500" href="/register/account">
            &larr; Back
          </Link>
          <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register/address">
            Save and continue
          </Link>
        </div>
      </form>
    </StepLayout>
  );
}
