/**
 * App: Customer Registration
 * Package: src/app/register
 * File: not-found.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: NotFound
 * Description: Presents a friendly message when a registration route is missing.
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-10 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">Step unavailable</h1>
      <p className="text-sm text-slate-600">
        The registration step you are looking for does not exist. It may have been moved or is not yet available.
      </p>
      <Link className="rounded-lg bg-brand-600 px-5 py-3 text-white hover:bg-brand-500" href="/register">
        Return to start
      </Link>
    </div>
  );
}
