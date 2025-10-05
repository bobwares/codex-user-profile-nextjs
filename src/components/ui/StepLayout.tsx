/**
 * App: Customer Registration
 * Package: src/components/ui
 * File: StepLayout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: StepLayout
 * Description: Provides a consistent wrapper for wizard steps with header and optional aside content.
 */
import { StepProgress } from './StepProgress';

export type StepLayoutProps = {
  title: string;
  description: string;
  stepSlug: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
};

export function StepLayout({ title, description, stepSlug, children, aside }: StepLayoutProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
      <div className="space-y-8">
        <header className="space-y-2">
          <StepProgress activeStep={stepSlug} />
          <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
          <p className="text-base text-slate-600">{description}</p>
        </header>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">{children}</div>
      </div>
      <aside className="space-y-4 text-sm text-slate-600">
        {aside ?? (
          <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-6">
            <h2 className="text-base font-semibold text-brand-700">Why we ask</h2>
            <p>
              Each detail helps us personalize communication, verify identity securely, and deliver localized experiences.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
