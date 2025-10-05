/**
 * App: Customer Registration
 * Package: src/app/register
 * File: error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: default
 * Description: Client component boundary shown when a registration step throws an error.
 */
'use client';

import Link from 'next/link';

export default function RegisterError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-6 rounded-3xl border border-red-200 bg-red-50 p-8">
      <h1 className="text-2xl font-semibold text-red-700">We could not load this step</h1>
      <p className="text-sm text-red-600">
        {error.message || 'An unexpected error occurred while loading the registration step. Please try again.'}
      </p>
      <div className="flex gap-4">
        <button className="rounded-lg bg-red-600 px-4 py-2 text-white" onClick={() => reset()} type="button">
          Retry
        </button>
        <Link className="rounded-lg border border-red-200 px-4 py-2 text-red-700" href="/register">
          Return to start
        </Link>
      </div>
    </div>
  );
}
