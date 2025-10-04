/**
 * App: Customer Registration
 * Package: src.app
 * File: global-error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GlobalError
 * Description: Global error boundary ensuring fatal rendering issues surface a friendly message.
 */
'use client';

interface GlobalErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

const GlobalError = ({ reset }: GlobalErrorProps) => (
  <html lang="en">
    <body className="flex min-h-screen items-center justify-center bg-red-50">
      <div className="rounded-lg border border-red-200 bg-white p-8 text-center text-red-700 shadow-sm">
        <h1 className="text-2xl font-semibold">We hit a snag</h1>
        <p className="mt-2 text-sm">Please refresh the page. If the problem continues, contact support.</p>
        <button type="button" className="mt-4 bg-red-600 hover:bg-red-700" onClick={reset}>
          Try again
        </button>
      </div>
    </body>
  </html>
);

export default GlobalError;
