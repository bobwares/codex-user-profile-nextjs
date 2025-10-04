/**
 * App: Customer Registration
 * Package: src.services
 * File: content.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: getLandingContent, getStepContent, getVerificationContent
 * Description: Service providing mock content for wizard routes simulating CMS-driven copy.
 */
type WizardStepKey =
  | '/'
  | '/register'
  | '/register/account'
  | '/register/details'
  | '/register/address'
  | '/register/preferences'
  | '/register/review'
  | '/verify/email'
  | '/verify/phone';

interface StepContent {
  title: string;
  description: string;
  points?: string[];
}

const contentMap: Record<WizardStepKey, StepContent> = {
  '/': {
    title: 'Welcome to the Customer Registration Wizard',
    description:
      'Create your secure account, add your personal details, and tailor communication preferences in minutes.',
    points: [
      'Progress indicator keeps you informed at every step',
      'Server-validated forms ensure accurate data',
      'Accessible experience optimized for keyboard navigation'
    ]
  },
  '/register': {
    title: 'Let’s get started',
    description: 'Review what you will need to complete the registration process.',
    points: ['Account credentials', 'Personal details', 'Preferred communication settings']
  },
  '/register/account': {
    title: 'Create your account credentials',
    description: 'Use a strong password and optionally add your phone number for SMS updates.',
  },
  '/register/details': {
    title: 'Tell us about yourself',
    description: 'Provide your legal name and optional demographic information so we can personalize your experience.',
  },
  '/register/address': {
    title: 'Where can we reach you?',
    description: 'Share your primary address to help us route communications and services.',
  },
  '/register/preferences': {
    title: 'Set your preferences',
    description: 'Choose your language, communication channels, and required consents.',
  },
  '/register/review': {
    title: 'Review and submit',
    description: 'Confirm your details before creating your account.',
  },
  '/verify/email': {
    title: 'Verify your email address',
    description: 'We sent a link to your inbox. Follow it to activate your account.',
  },
  '/verify/phone': {
    title: 'Verify your phone number',
    description: 'Enter the 6-digit code we sent to your mobile device.',
  },
};

const getLandingContent = () => contentMap['/'];

const getStepContent = (path: Exclude<WizardStepKey, '/'>) => contentMap[path];

const getVerificationContent = (path: '/verify/email' | '/verify/phone') => contentMap[path];

export { getLandingContent, getStepContent, getVerificationContent };
