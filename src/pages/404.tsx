/**
 * App: Codex User Profile Next.js
 * Package: pages
 * File: 404.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default
 * Description: Custom not found page displayed for unmatched routes.
 */

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="rounded-lg bg-white p-10 text-center shadow">
        <h1 className="text-4xl font-semibold text-slate-900">404</h1>
        <p className="mt-4 text-slate-600">We could not find the page you were looking for.</p>
        <Link href="/" className="mt-6 inline-block text-indigo-600">
          Return home
        </Link>
      </div>
    </div>
  );
}
