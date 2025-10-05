/**
 * App: Customer Registration
 * Package: src/app/register/preferences
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: PreferencesStepPage
 * Description: Collects communication preferences, localization, and consent acknowledgements.
 */
import Link from 'next/link';
import { StepLayout } from '@/components/ui/StepLayout';

export default function PreferencesStepPage() {
  return (
    <StepLayout
      description="Tell us how you want to hear from us and agree to the terms required to activate your account."
      stepSlug="preferences"
      title="Customize your experience"
    >
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700" htmlFor="language">
            Preferred language
          </label>
          <select className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2" id="language" name="language" required>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-slate-700">Communication preferences</legend>
          <label className="flex items-center gap-3 text-sm text-slate-600">
            <input className="h-4 w-4 rounded border-slate-300" defaultChecked id="emailComm" name="emailComm" type="checkbox" />
            Email updates and critical account alerts
          </label>
          <label className="flex items-center gap-3 text-sm text-slate-600">
            <input className="h-4 w-4 rounded border-slate-300" id="smsComm" name="smsComm" type="checkbox" />
            SMS messages for verification and reminders
          </label>
        </fieldset>
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-slate-700">Consents</legend>
          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input className="mt-1 h-4 w-4 rounded border-slate-300" id="marketing" name="marketing" type="checkbox" />
            <span>
              I agree to receive marketing communications. You can opt out at any time.
            </span>
          </label>
          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input className="mt-1 h-4 w-4 rounded border-slate-300" id="tos" name="tos" required type="checkbox" />
            <span>
              I agree to the <a href="/legal/terms">Terms of Service</a>.
            </span>
          </label>
          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input className="mt-1 h-4 w-4 rounded border-slate-300" id="privacy" name="privacy" required type="checkbox" />
            <span>
              I acknowledge the <a href="/legal/privacy">Privacy Policy</a>.
            </span>
          </label>
        </fieldset>
        <div className="flex justify-between">
          <Link className="text-sm text-slate-500" href="/register/address">
            &larr; Back
          </Link>
          <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register/review">
            Save and continue
          </Link>
        </div>
      </form>
    </StepLayout>
  );
}
