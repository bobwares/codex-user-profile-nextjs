/**
 * App: Customer Registration
 * Package: src/lib
 * File: registrationSteps.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: registrationSteps, RegistrationStep
 * Description: Defines the canonical step order for the registration wizard.
 */
export type RegistrationStep = {
  index: number;
  slug: string;
  label: string;
};

export const registrationSteps: RegistrationStep[] = [
  { index: 1, slug: 'welcome', label: 'Welcome' },
  { index: 2, slug: 'account', label: 'Account' },
  { index: 3, slug: 'details', label: 'Personal Details' },
  { index: 4, slug: 'address', label: 'Address' },
  { index: 5, slug: 'preferences', label: 'Preferences' },
  { index: 6, slug: 'review', label: 'Review' }
];
