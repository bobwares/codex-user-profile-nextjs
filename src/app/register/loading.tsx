/**
 * App: Customer Registration
 * Package: src/app/register
 * File: loading.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: Loading
 * Description: Displays a skeleton while registration step data is loading.
 */
export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-2/3 animate-pulse rounded-lg bg-slate-200" />
      <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-10 w-full animate-pulse rounded-lg bg-slate-100" />
        ))}
      </div>
    </div>
  );
}
