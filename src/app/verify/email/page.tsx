/**
 * App: Customer Registration
 * Package: app/verify
 * File: email/page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Handles email verification feedback based on verification token.
 */
import { verifyEmail } from '@/services/customers';

export default async function EmailVerificationPage({
  searchParams
}: {
  searchParams: { token?: string };
}): Promise<JSX.Element> {
  const token = searchParams.token;

  if (!token) {
    return (
      <div className="py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-xl font-semibold text-slate-900">Missing verification token</h1>
          <p className="mt-2 text-sm text-slate-600">
            The verification link is invalid. Please request a new verification email.
          </p>
        </div>
      </div>
    );
  }

  try {
    await verifyEmail(token);
    return (
      <div className="py-16">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 shadow-sm">
          <h1 className="text-xl font-semibold text-green-700">Email verified</h1>
          <p className="mt-2 text-sm text-green-800">
            Your email address has been successfully verified. You may close this page.
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Email verification failed', error);
    return (
      <div className="py-16">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 shadow-sm">
          <h1 className="text-xl font-semibold text-red-700">Unable to verify email</h1>
          <p className="mt-2 text-sm text-red-700">
            The verification link may have expired. Please request another email verification.
          </p>
        </div>
      </div>
    );
  }
}
