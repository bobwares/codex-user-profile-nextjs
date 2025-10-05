/**
 * App: Customer Registration
 * Package: src/components/ui
 * File: StepProgress.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: StepProgress
 * Description: Renders a horizontal progress indicator for the registration steps.
 */
import { registrationSteps } from '@/lib/registrationSteps';

export type StepProgressProps = {
  activeStep: string;
};

export function StepProgress({ activeStep }: StepProgressProps) {
  return (
    <ol className="flex flex-wrap gap-3 text-sm">
      {registrationSteps.map((step) => {
        const isActive = step.slug === activeStep;
        return (
          <li
            key={step.slug}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
              isActive ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-slate-200 bg-white text-slate-500'
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-xs">
              {step.index}
            </span>
            <span className="font-medium">{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
