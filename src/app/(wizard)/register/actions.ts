/**
 * App: Customer Registration
 * Package: src.app.register
 * File: actions.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: submitRegistration
 * Description: Server action orchestrating customer creation via the domain service and cache revalidation.
 */
'use server';

import { revalidateTag } from 'next/cache';
import { createCustomer, type CustomerPayload } from '@/services/customer';

const submitRegistration = async (formData: FormData) => {
  const payload: CustomerPayload = {
    email: String(formData.get('email')),
    password: String(formData.get('password')),
    phone: formData.get('phone') ? String(formData.get('phone')) : undefined,
    profile: {
      firstName: String(formData.get('firstName')),
      lastName: String(formData.get('lastName')),
      preferredName: formData.get('preferredName') ? String(formData.get('preferredName')) : undefined,
      dateOfBirth: formData.get('dateOfBirth') ? String(formData.get('dateOfBirth')) : undefined,
      gender: formData.get('gender') ? String(formData.get('gender')) : undefined,
      pronouns: formData.get('pronouns') ? String(formData.get('pronouns')) : undefined,
    },
    address: {
      country: String(formData.get('country')),
      line1: String(formData.get('line1')),
      line2: formData.get('line2') ? String(formData.get('line2')) : undefined,
      city: String(formData.get('city')),
      region: String(formData.get('region')),
      postalCode: String(formData.get('postalCode')),
      timeZone: formData.get('timeZone') ? String(formData.get('timeZone')) : undefined,
    },
    preferences: {
      language: String(formData.get('language')),
      communication: {
        email: formData.get('prefersEmail') === 'on',
        sms: formData.get('prefersSms') === 'on',
      },
      marketingOptIn: formData.get('marketingOptIn') === 'on',
    },
    consents: {
      termsAccepted: formData.get('termsAccepted') === 'on',
      privacyAccepted: formData.get('privacyAccepted') === 'on',
      ageConfirmed: formData.get('ageConfirmed') === 'on',
    },
  };

  await createCustomer(payload);
  revalidateTag('registrations');
  return { status: 'success' };
};

export { submitRegistration };
