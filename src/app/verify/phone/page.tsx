/**
 * App: Customer Registration
 * Package: src/app/verify/phone
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: PhoneVerificationPage
 * Description: Provides an interface for entering SMS verification codes.
 */
import Link from 'next/link';

export default function PhoneVerificationPage() {
  return (
    <section className="mx-auto max-w-xl space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow">
      <h1 className="text-3xl font-semibold text-slate-900">Verify your phone</h1>
      <p className="text-base text-slate-600">
        Enter the six-digit code sent to your mobile number. Verification helps us secure your account and deliver timely
        notifications.
      </p>
      <form className="space-y-5">
        <div className="flex justify-center gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              aria-label={`Digit ${index + 1}`}
              className="h-14 w-12 rounded-xl border border-slate-200 text-center text-xl"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              required
              type="text"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-3 text-sm text-slate-500">
          <button className="underline" type="button">
            Resend code
          </button>
          <span>Code expires in 04:59</span>
        </div>
        <div className="flex justify-between">
          <Link className="text-sm text-slate-500" href="/register/review">
            &larr; Back to review
          </Link>
          <button className="rounded-lg bg-brand-600 px-6 py-3 text-white hover:bg-brand-500" type="submit">
            Verify phone
          </button>
        </div>
      </form>
    </section>
  );
}
