/**
 * App: Customer Registration
 * Package: src.lib.providers
 * File: registration-progress-provider.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: RegistrationProgressContext, RegistrationProgressProvider, useRegistrationProgress
 * Description: React context tracking the wizard step progression for client-only UI affordances.
 */
'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type RegistrationStep =
  | 'welcome'
  | 'account'
  | 'details'
  | 'address'
  | 'preferences'
  | 'review';

interface RegistrationProgressContextValue {
  currentStep: RegistrationStep;
  completeStep: (step: RegistrationStep) => void;
  completedSteps: Set<RegistrationStep>;
}

const RegistrationProgressContext = createContext<RegistrationProgressContextValue | undefined>(
  undefined,
);

interface RegistrationProgressProviderProps {
  readonly children: React.ReactNode;
}

const RegistrationProgressProvider = ({ children }: RegistrationProgressProviderProps) => {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('welcome');
  const [completedSteps, setCompletedSteps] = useState<Set<RegistrationStep>>(new Set());

  const completeStep = useCallback((step: RegistrationStep) => {
    setCompletedSteps((prev) => {
      if (prev.has(step)) {
        return prev;
      }
      const next = new Set(prev);
      next.add(step);
      return next;
    });
    setCurrentStep((prev) => (prev === step ? prev : step));
  }, []);

  const value = useMemo<RegistrationProgressContextValue>(() => {
    return {
      currentStep,
      completeStep,
      completedSteps,
    };
  }, [completeStep, completedSteps, currentStep]);

  return (
    <RegistrationProgressContext.Provider value={value}>
      {children}
    </RegistrationProgressContext.Provider>
  );
};

const useRegistrationProgress = () => {
  const context = useContext(RegistrationProgressContext);
  if (!context) {
    throw new Error('useRegistrationProgress must be used within RegistrationProgressProvider');
  }
  return context;
};

export { RegistrationProgressContext, RegistrationProgressProvider, useRegistrationProgress };
