/**
 * App: Customer Registration
 * Package: src.app
 * File: error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: ErrorBoundary
 * Description: Global error boundary presenting a retry affordance for unexpected failures.
 */
'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorBoundaryProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-800">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <p className="mt-2 text-sm">Please try again or contact support if the issue persists.</p>
      <button type="button" className="mt-4 bg-red-600 hover:bg-red-700" onClick={reset}>
        Retry
      </button>
    </div>
  );
};

export default ErrorBoundary;
