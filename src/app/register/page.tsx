/**
 * App: Customer Registration
 * Package: src/app/register
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: RegisterWelcomePage
 * Description: Introduces the registration wizard and prompts users to proceed.
 */
import Link from 'next/link';
import { StepLayout } from '@/components/ui/StepLayout';

export default function RegisterWelcomePage() {
  return (
    <StepLayout
      description="Follow the guided steps to create your customer profile, customize preferences, and confirm your consent."
      stepSlug="welcome"
      title="Get started with your registration"
    >
      <div className="space-y-6">
        <p className="text-base text-slate-600">
          We will request contact details, address information, and communication preferences. You can review and update each
          step before submitting.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-sm text-slate-600">
          <li>Secure handling of your personal information with encryption in transit and at rest.</li>
          <li>Transparent consent tracking for regulatory compliance.</li>
          <li>Localized address support for international customers.</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register/account">
            Begin account setup
          </Link>
          <Link className="rounded-lg border border-slate-200 px-5 py-3 text-slate-700" href="/register/preferences">
            Jump to preferences
          </Link>
        </div>
      </div>
    </StepLayout>
  );
}
