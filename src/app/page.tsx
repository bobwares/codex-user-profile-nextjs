/**
 * App: Customer Registration
 * Package: src/app
 * File: page.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: HomePage
 * Description: Landing page describing the registration wizard and guiding visitors to begin.
 */
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Welcome to the Customer Registration Wizard
        </h1>
        <p className="text-lg text-slate-600">
          Streamline onboarding with a guided, accessible experience that captures identity, preferences, and consent in minutes.
        </p>
        <ul className="space-y-3 text-slate-600">
          <li>✔️ Multi-step registration with validation at each stage</li>
          <li>✔️ Secure handling of personal data with audit-ready consent capture</li>
          <li>✔️ Built for global audiences with localization-ready design</li>
        </ul>
        <div className="flex gap-4">
          <Link
            className="rounded-lg bg-brand-600 px-5 py-3 text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-500"
            href="/register"
          >
            Start registration
          </Link>
          <Link className="rounded-lg border border-brand-200 px-5 py-3 text-brand-600" href="/register/review">
            Review steps
          </Link>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Registration insights</h2>
        <dl className="mt-6 grid grid-cols-2 gap-6 text-sm text-slate-600">
          <div className="rounded-xl bg-brand-50 p-4 text-center">
            <dt className="text-xs uppercase tracking-wide text-brand-600">Completion rate</dt>
            <dd className="text-2xl font-semibold text-brand-700">72%</dd>
          </div>
          <div className="rounded-xl bg-brand-50 p-4 text-center">
            <dt className="text-xs uppercase tracking-wide text-brand-600">Verification within 24h</dt>
            <dd className="text-2xl font-semibold text-brand-700">95%</dd>
          </div>
          <div className="rounded-xl bg-slate-100 p-4 text-center">
            <dt className="text-xs uppercase tracking-wide text-slate-500">Median time to complete</dt>
            <dd className="text-2xl font-semibold text-slate-700">1m 45s</dd>
          </div>
          <div className="rounded-xl bg-slate-100 p-4 text-center">
            <dt className="text-xs uppercase tracking-wide text-slate-500">Support tickets</dt>
            <dd className="text-2xl font-semibold text-slate-700">-38%</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
