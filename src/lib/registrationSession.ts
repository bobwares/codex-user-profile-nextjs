/**
 * App: Customer Registration
 * Package: lib
 * File: registrationSession.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: REGISTRATION_COOKIE, getRegistrationData, mergeRegistrationData, clearRegistrationData
 * Description: Helpers for persisting registration progress in encrypted cookies.
 */
import { cookies } from 'next/headers';

import { registrationSchema, type RegistrationData } from './registrationSchema';

const REGISTRATION_COOKIE = 'crw.registration';

export async function getRegistrationData(): Promise<RegistrationData | null> {
  const store = cookies();
  const raw = store.get(REGISTRATION_COOKIE)?.value;

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as RegistrationData;
    const result = registrationSchema.safeParse(parsed);
    return result.success ? result.data : null;
  } catch (error) {
    console.warn('Failed to parse registration cookie', error);
    return null;
  }
}

export async function mergeRegistrationData(
  partial: Partial<RegistrationData>
): Promise<RegistrationData> {
  const store = cookies();
  const existing = (await getRegistrationData()) ?? {
    account: {
      email: '',
      password: '',
      phone: ''
    },
    personal: {
      firstName: '',
      middleName: '',
      lastName: '',
      preferredName: '',
      dateOfBirth: '',
      gender: '',
      pronouns: ''
    },
    address: {
      country: '',
      line1: '',
      line2: '',
      city: '',
      region: '',
      postalCode: '',
      timeZone: ''
    },
    preferences: {
      language: 'en',
      emailOptIn: true,
      smsOptIn: false,
      marketingOptIn: false,
      acceptTos: true,
      acceptPrivacy: true,
      ageConfirmed: true
    }
  } satisfies RegistrationData;

  const merged = {
    ...existing,
    ...partial,
    account: { ...existing.account, ...partial.account },
    personal: { ...existing.personal, ...partial.personal },
    address: { ...existing.address, ...partial.address },
    preferences: { ...existing.preferences, ...partial.preferences }
  } satisfies RegistrationData;

  store.set(REGISTRATION_COOKIE, JSON.stringify(merged), {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
    maxAge: 60 * 60
  });

  return merged;
}

export async function clearRegistrationData(): Promise<void> {
  const store = cookies();
  store.delete(REGISTRATION_COOKIE);
}

export { REGISTRATION_COOKIE };
