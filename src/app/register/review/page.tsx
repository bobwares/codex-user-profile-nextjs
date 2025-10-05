/**
 * App: Customer Registration
 * Package: src/app/register/review
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: ReviewStepPage
 * Description: Summarizes collected information and provides submission options.
 */
import Link from 'next/link';
import { StepLayout } from '@/components/ui/StepLayout';
import { SubmitButton } from '@/components/client/SubmitButton';

const summaryItems = [
  {
    title: 'Account',
    href: '/register/account',
    description: 'Email, password strength, and optional phone number for verification.'
  },
  {
    title: 'Personal details',
    href: '/register/details',
    description: 'Names, pronouns, and optional demographic information for personalization.'
  },
  {
    title: 'Address',
    href: '/register/address',
    description: 'Primary address with region-specific validation and localization.'
  },
  {
    title: 'Preferences',
    href: '/register/preferences',
    description: 'Language, communication channels, and consent acknowledgements.'
  }
];

export default function ReviewStepPage() {
  return (
    <StepLayout
      description="Confirm your information before submitting. You can revisit any step to make changes."
      stepSlug="review"
      title="Review and submit"
    >
      <div className="space-y-6">
        <ul className="space-y-4">
          {summaryItems.map((item) => (
            <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                <Link className="text-sm font-medium text-brand-600" href={item.href}>
                  Edit
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-brand-200 bg-brand-50/50 p-6 text-sm text-slate-700">
          <h2 className="text-base font-semibold text-brand-700">Consent summary</h2>
          <p className="mt-2">
            By submitting, you agree that we will store your details according to our privacy policy and send a confirmation
            email with next steps. You can revisit your preferences anytime after activation.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link className="text-sm text-slate-500" href="/register/preferences">
            &larr; Back
          </Link>
          <div className="flex gap-3">
            <Link className="rounded-lg border border-slate-200 px-5 py-3 text-slate-700" href="/register/account">
              Start over
            </Link>
            <SubmitButton label="Submit registration" />
          </div>
        </div>
      </div>
    </StepLayout>
  );
}
