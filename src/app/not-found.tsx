/**
 * App: Customer Registration
 * Package: src.app
 * File: not-found.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: NotFound
 * Description: Not found boundary guiding users back to the registration wizard.
 */
import Link from 'next/link';

const NotFound = () => (
  <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
    <h2 className="text-xl font-semibold text-slate-900">Page not found</h2>
    <p className="mt-2 text-sm text-slate-500">
      The requested page could not be located. Return to the wizard to continue registration.
    </p>
    <Link href="/register" className="mt-4 inline-flex">
      Back to registration
    </Link>
  </div>
);

export default NotFound;
