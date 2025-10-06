/**
 * App: Customer Registration
 * Package: app
 * File: not-found.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Global not found page for unknown routes.
 */
export default function NotFound(): JSX.Element {
  return (
    <div className="mx-auto mt-24 max-w-xl text-center">
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you are looking for does not exist. Return to the registration flow to continue.
      </p>
      <a className="mt-6 inline-flex items-center text-brand-600" href="/register">
        Back to registration
      </a>
    </div>
  );
}
