/**
 * App: Customer Registration
 * Package: components/ui
 * File: FormSection.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: FormSection
 * Description: Layout wrapper for wizard forms.
 */
import type { ReactNode } from 'react';

export function FormSection({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <header>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </header>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}
