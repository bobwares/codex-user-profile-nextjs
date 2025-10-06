/**
 * App: Customer Registration
 * Package: components/ui
 * File: RegistrationProgress.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: RegistrationProgress
 * Description: Displays a horizontal progress indicator for wizard steps.
 */
const STEPS = [
  { slug: '', label: 'Welcome' },
  { slug: 'account', label: 'Account' },
  { slug: 'details', label: 'Personal' },
  { slug: 'address', label: 'Address' },
  { slug: 'preferences', label: 'Preferences' },
  { slug: 'review', label: 'Review' }
];

export function RegistrationProgress({ activeStep }: { activeStep: string }): JSX.Element {
  return (
    <ol className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
      {STEPS.map((step, index) => {
        const isActive = step.slug === activeStep;
        const isCompleted = STEPS.findIndex(({ slug }) => slug === activeStep) > index;

        return (
          <li key={step.slug || 'welcome'} className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                isActive
                  ? 'border-brand-500 bg-brand-100 text-brand-700'
                  : isCompleted
                  ? 'border-brand-500 bg-brand-500 text-white'
                  : 'border-slate-300 bg-white text-slate-500'
              }`}
            >
              {index + 1}
            </span>
            <span className={isActive ? 'font-semibold text-brand-700' : ''}>{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
