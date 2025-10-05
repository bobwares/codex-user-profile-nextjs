/**
 * App: Codex User Profile Next.js
 * Package: components
 * File: HomePageView.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: HomePageView
 * Description: Presentational component rendering the landing page summary information.
 */

import type { HomeSummary } from '@/services/homeService';

interface HomePageViewProps {
  readonly summary: HomeSummary;
}

export function HomePageView({ summary }: HomePageViewProps) {
  return (
    <section className="space-y-6">
      <div className="rounded-lg bg-white p-8 shadow">
        <h2 className="text-2xl font-semibold">{summary.title}</h2>
        <p className="mt-2 text-lg text-slate-600">{summary.tagline}</p>
      </div>
      <dl className="grid gap-4 md:grid-cols-3">
        <StatCard label="Users" value={summary.stats.users.toLocaleString()} />
        <StatCard label="Projects" value={summary.stats.projects.toLocaleString()} />
        <StatCard label="Uptime" value={summary.stats.uptime} />
      </dl>
    </section>
  );
}

interface StatCardProps {
  readonly label: string;
  readonly value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <dt className="text-sm font-medium uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold text-slate-900">{value}</dd>
    </div>
  );
}
