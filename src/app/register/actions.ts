/**
 * App: Customer Registration
 * Package: app/register
 * File: actions.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: startRegistration, submitAccount, submitPersonalDetails, submitAddress, submitPreferences, completeRegistration
 * Description: Server actions that drive the registration wizard state machine.
 */
'use server';

import { redirect } from 'next/navigation';

import { logServerEvent } from '@/lib/observability';
import {
  accountSchema,
  addressSchema,
  personalSchema,
  preferencesSchema
} from '@/lib/registrationSchema';
import {
  clearRegistrationData,
  getRegistrationData,
  mergeRegistrationData
} from '@/lib/registrationSession';
import { createCustomer } from '@/services/customers';

function errorRedirect(path: string, message: string): never {
  const search = new URLSearchParams({ error: message }).toString();
  redirect(`${path}?${search}`);
}

export async function startRegistration(): Promise<never> {
  await clearRegistrationData();
  logServerEvent({ name: 'registration.started' });
  redirect('/register/account');
}

export async function submitAccount(formData: FormData): Promise<never> {
  const payload = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
    confirmPassword: String(formData.get('confirmPassword') ?? ''),
    phone: formData.get('phone') ? String(formData.get('phone')) : undefined
  };

  const result = accountSchema
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords must match.',
      path: ['confirmPassword']
    })
    .safeParse(payload);

  if (!result.success) {
    const message = result.error.issues[0]?.message ?? 'Unable to save account details.';
    errorRedirect('/register/account', message);
  }

  await mergeRegistrationData({
    account: {
      email: result.data.email,
      password: result.data.password,
      phone: result.data.phone ?? ''
    }
  });

  logServerEvent({ name: 'registration.account.saved' });
  redirect('/register/details');
}

export async function submitPersonalDetails(formData: FormData): Promise<never> {
  const payload = {
    firstName: String(formData.get('firstName') ?? ''),
    middleName: formData.get('middleName') ? String(formData.get('middleName')) : undefined,
    lastName: String(formData.get('lastName') ?? ''),
    preferredName: formData.get('preferredName')
      ? String(formData.get('preferredName'))
      : undefined,
    dateOfBirth: formData.get('dateOfBirth') ? String(formData.get('dateOfBirth')) : undefined,
    gender: formData.get('gender') ? String(formData.get('gender')) : undefined,
    pronouns: formData.get('pronouns') ? String(formData.get('pronouns')) : undefined
  };

  const result = personalSchema.safeParse(payload);
  if (!result.success) {
    const message = result.error.issues[0]?.message ?? 'Unable to save personal details.';
    errorRedirect('/register/details', message);
  }

  await mergeRegistrationData({ personal: result.data });
  logServerEvent({ name: 'registration.personal.saved' });
  redirect('/register/address');
}

export async function submitAddress(formData: FormData): Promise<never> {
  const payload = {
    country: String(formData.get('country') ?? ''),
    line1: String(formData.get('line1') ?? ''),
    line2: formData.get('line2') ? String(formData.get('line2')) : undefined,
    city: String(formData.get('city') ?? ''),
    region: String(formData.get('region') ?? ''),
    postalCode: String(formData.get('postalCode') ?? ''),
    timeZone: formData.get('timeZone') ? String(formData.get('timeZone')) : undefined
  };

  const result = addressSchema.safeParse(payload);
  if (!result.success) {
    const message = result.error.issues[0]?.message ?? 'Unable to save address.';
    errorRedirect('/register/address', message);
  }

  await mergeRegistrationData({ address: result.data });
  logServerEvent({ name: 'registration.address.saved' });
  redirect('/register/preferences');
}

export async function submitPreferences(formData: FormData): Promise<never> {
  const payload = {
    language: String(formData.get('language') ?? ''),
    emailOptIn: Boolean(formData.get('emailOptIn')),
    smsOptIn: Boolean(formData.get('smsOptIn')),
    marketingOptIn: Boolean(formData.get('marketingOptIn')),
    acceptTos: formData.get('acceptTos') === 'on',
    acceptPrivacy: formData.get('acceptPrivacy') === 'on',
    ageConfirmed: formData.get('ageConfirmed') === 'on'
  };

  const result = preferencesSchema.safeParse(payload);
  if (!result.success) {
    const message = result.error.issues[0]?.message ?? 'Unable to save preferences.';
    errorRedirect('/register/preferences', message);
  }

  await mergeRegistrationData({ preferences: result.data });
  logServerEvent({ name: 'registration.preferences.saved' });
  redirect('/register/review');
}

export async function completeRegistration(): Promise<never> {
  const registration = await getRegistrationData();
  if (!registration) {
    errorRedirect('/register', 'No registration found to submit.');
  }

  const { customerId } = await createCustomer(registration);
  await clearRegistrationData();
  logServerEvent({ name: 'registration.completed', properties: { customerId } });

  const search = new URLSearchParams({ submitted: 'true', customerId }).toString();
  redirect(`/register/review?${search}`);
}
