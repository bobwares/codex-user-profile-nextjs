/**
 * App: Customer Registration
 * Package: app
 * File: loading.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: default
 * Description: Displays shimmer while server components resolve.
 */
export default function GlobalLoading(): JSX.Element {
  return (
    <div className="mx-auto mt-24 flex max-w-xl flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500 border-t-transparent" />
      <p className="text-sm text-slate-600">Loading the registration experience…</p>
    </div>
  );
}
