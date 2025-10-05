/**
 * App: Customer Registration
 * Package: src/app/verify/email
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: EmailVerificationPage
 * Description: Displays the status of email verification after token processing.
 */
import Link from 'next/link';

export default function EmailVerificationPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow">
      <h1 className="text-3xl font-semibold text-slate-900">Check your inbox</h1>
      <p className="text-base text-slate-600">
        We sent a verification email to confirm your address. Follow the link inside to activate your account. If you do not see
        the email within a few minutes, check your spam folder or request another verification.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register/review">
          Return to registration
        </Link>
        <button className="rounded-lg border border-slate-200 px-5 py-3 text-slate-700" type="button">
          Resend email
        </button>
      </div>
    </section>
  );
}
