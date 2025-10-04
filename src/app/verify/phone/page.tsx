/**
 * App: Customer Registration
 * Package: src.app.verify.phone
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, PhoneVerificationPage
 * Description: Verification route capturing the SMS code for phone number confirmation.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVerificationContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Verify Phone | Customer Registration Wizard',
  description: 'Enter the SMS code sent to your phone to complete verification.',
};

const PhoneVerificationPage = async () => {
  const content = getVerificationContent('/verify/phone');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <form className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700" htmlFor="code">
          Verification code
        </label>
        <input
          id="code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-center text-lg tracking-widest"
        />
        <button type="submit">Verify code</button>
      </form>
      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <Link href="/register">Return to registration</Link>
      </div>
    </section>
  );
};

export default PhoneVerificationPage;
