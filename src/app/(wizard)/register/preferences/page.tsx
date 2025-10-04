/**
 * App: Customer Registration
 * Package: src.app.register.preferences
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, PreferencesStepPage
 * Description: Wizard step configuring language, communication, and consent settings.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getStepContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Preferences | Customer Registration Wizard',
  description: 'Select language, marketing consent, and legal acknowledgements.',
};

const PreferencesStepPage = async () => {
  const content = getStepContent('/register/preferences');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-6">
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-slate-700">
            Preferred language
          </label>
          <select id="language" name="language" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-slate-700">Communication channels</legend>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" name="prefersEmail" defaultChecked className="rounded border-slate-300" />
            Email updates
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" name="prefersSms" className="rounded border-slate-300" />
            SMS updates
          </label>
        </fieldset>
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-slate-700">Consents</legend>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="termsAccepted" required className="mt-1 rounded border-slate-300" />
            <span>I agree to the Terms of Service.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="privacyAccepted" required className="mt-1 rounded border-slate-300" />
            <span>I agree to the Privacy Policy.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="marketingOptIn" className="mt-1 rounded border-slate-300" />
            <span>Send me product tips and occasional marketing updates.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" name="ageConfirmed" required className="mt-1 rounded border-slate-300" />
            <span>I confirm that I am of legal age to register.</span>
          </label>
        </fieldset>
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link href="/register/address" className="text-sm text-slate-500">
            Back
          </Link>
          <Link href="/register/review" className="inline-flex">
            Save and continue
          </Link>
        </div>
      </form>
    </section>
  );
};

export default PreferencesStepPage;
