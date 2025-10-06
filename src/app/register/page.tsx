/**
 * App: Customer Registration
 * Package: app/register
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Welcome step for the registration wizard.
 */
import { RegistrationProgress } from '@/components/ui/RegistrationProgress';
import { FormSection } from '@/components/ui/FormSection';
import { startRegistration } from './actions';

export default function RegisterWelcomePage(): JSX.Element {
  return (
    <div className="py-10">
      <RegistrationProgress activeStep="" />
      <FormSection
        title="Create your customer profile"
        description="We will guide you through account creation, personal details, address, preferences, and final review."
      >
        <form action={startRegistration} className="space-y-4">
          <p className="text-sm text-slate-600">
            The registration flow takes about 3 minutes to complete. Have your contact details ready.
          </p>
          <button type="submit">Begin registration</button>
        </form>
      </FormSection>
    </div>
  );
}
