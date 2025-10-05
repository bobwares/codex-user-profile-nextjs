/**
 * App: Codex User Profile Next.js
 * Package: pages
 * File: _error.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default
 * Description: Custom global error page providing fallback messaging for unhandled server errors.
 */

import type { NextPageContext } from 'next';

interface ErrorPageProps {
  readonly statusCode?: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="rounded-lg bg-white p-10 text-center shadow">
        <h1 className="text-3xl font-semibold text-slate-900">Unexpected error</h1>
        <p className="mt-4 text-slate-600">
          {statusCode
            ? `Our servers returned status ${statusCode}. Please try again later.`
            : 'An error occurred on the client. Please refresh and try again.'}
        </p>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode;
  return { statusCode };
};

export default ErrorPage;
