/**
 * App: Customer Registration
 * Package: src.app.register
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: RegisterLayout
 * Description: Wizard layout providing progress overview and shared navigation for registration steps.
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRegistrationProgress } from '@/lib/providers/registration-progress-provider';

const steps = [
  { href: '/register', label: 'Welcome', key: 'welcome' },
  { href: '/register/account', label: 'Account', key: 'account' },
  { href: '/register/details', label: 'Personal details', key: 'details' },
  { href: '/register/address', label: 'Address', key: 'address' },
  { href: '/register/preferences', label: 'Preferences', key: 'preferences' },
  { href: '/register/review', label: 'Review', key: 'review' },
] as const;

interface RegisterLayoutProps {
  readonly children: React.ReactNode;
}

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
  const pathname = usePathname();
  const { completeStep, currentStep } = useRegistrationProgress();

  useEffect(() => {
    const current = steps.find((step) => step.href === pathname);
    if (current) {
      completeStep(current.key as typeof steps[number]['key']);
    }
  }, [pathname, completeStep]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
      <nav className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-sm font-semibold uppercase text-slate-500">Registration steps</h2>
        <ol className="mt-4 space-y-3">
          {steps.map((step, index) => {
            const active = pathname === step.href;
            return (
              <li key={step.href} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold ${
                    active ? 'border-brand-500 bg-brand-100 text-brand-700' : 'border-slate-200 text-slate-500'
                  }`}
                >
                  {index + 1}
                </span>
                <Link
                  href={step.href}
                  className={
                    active
                      ? 'text-sm font-medium text-brand-700'
                      : 'text-sm font-medium text-slate-500 hover:text-slate-700'
                  }
                >
                  {step.label}
                </Link>
              </li>
            );
          })}
        </ol>
        <p className="mt-6 text-xs text-slate-400">Current step: {currentStep}</p>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default RegisterLayout;
