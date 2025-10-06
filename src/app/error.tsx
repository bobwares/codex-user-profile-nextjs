/**
 * App: Customer Registration
 * Package: app
 * File: error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: ErrorBoundary
 * Description: Client boundary handling unhandled route errors.
 */
'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }): JSX.Element {
  useEffect(() => {
    console.error('Unhandled error', error);
  }, [error]);

  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-xl font-semibold text-red-600">Something went wrong</h2>
      <p className="mt-4 text-sm text-slate-600">
        Our team has been notified. Please retry the last action or return to the start of the
        registration flow.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button type="button" onClick={reset}>
          Try again
        </button>
        <a className="inline-flex items-center text-brand-600" href="/register">
          Back to registration
        </a>
      </div>
    </div>
  );
}
