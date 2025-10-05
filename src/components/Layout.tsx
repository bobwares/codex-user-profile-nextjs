/**
 * App: Codex User Profile Next.js
 * Package: components
 * File: Layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: Layout
 * Description: Presentational layout component providing base page structure.
 */

import type { ReactNode } from 'react';

interface LayoutProps {
  readonly title: string;
  readonly children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white py-6 shadow-sm">
        <div className="mx-auto w-full max-w-5xl px-4">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-4 py-8">{children}</main>
      <footer className="border-t border-slate-200 bg-white py-4">
        <div className="mx-auto w-full max-w-5xl px-4 text-sm text-slate-500">
          Built with the Next.js Scalable Pages Router pattern.
        </div>
      </footer>
    </div>
  );
}
