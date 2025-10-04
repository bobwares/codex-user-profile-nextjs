/**
 * App: Customer Registration
 * Package: src.app.verify.email
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: dynamic, metadata, EmailVerificationPage
 * Description: Verification route guiding users through confirming their email address.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getVerificationContent } from '@/services/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Verify Email | Customer Registration Wizard',
  description: 'Confirm your email address to finalize your new account.',
};

const EmailVerificationPage = async () => {
  const content = getVerificationContent('/verify/email');

  return (
    <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">{content.title}</h2>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <p>Didn’t get the email? Check your spam folder or request another verification link.</p>
        <button type="button">Resend verification email</button>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <Link href="/register">Return to registration</Link>
      </div>
    </section>
  );
};

export default EmailVerificationPage;
