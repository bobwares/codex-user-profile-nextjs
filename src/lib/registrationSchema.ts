/**
 * App: Customer Registration
 * Package: lib
 * File: registrationSchema.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: registrationSchema, accountSchema, personalSchema, addressSchema, preferencesSchema, RegistrationData
 * Description: Zod schemas describing each step of the registration wizard.
 */
import { z } from 'zod';

export const accountSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  confirmPassword: z.string().min(8, 'Confirm your password.'),
  phone: z.string().optional()
});

export const personalSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required.'),
  preferredName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  pronouns: z.string().optional()
});

export const addressSchema = z.object({
  country: z.string().min(1, 'Country is required.'),
  line1: z.string().min(1, 'Address line 1 is required.'),
  line2: z.string().optional(),
  city: z.string().min(1, 'City is required.'),
  region: z.string().min(1, 'Region is required.'),
  postalCode: z.string().min(2, 'Postal code is required.'),
  timeZone: z.string().optional()
});

export const preferencesSchema = z.object({
  language: z.string().min(1, 'Preferred language is required.'),
  emailOptIn: z.boolean(),
  smsOptIn: z.boolean(),
  marketingOptIn: z.boolean().optional(),
  acceptTos: z.literal(true, { errorMap: () => ({ message: 'You must accept the terms of service.' }) }),
  acceptPrivacy: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the privacy policy.' })
  }),
  ageConfirmed: z.boolean().optional()
});

export const registrationSchema = z.object({
  account: accountSchema.omit({ confirmPassword: true }).extend({ phone: z.string().optional() }),
  personal: personalSchema,
  address: addressSchema,
  preferences: preferencesSchema
});

export type RegistrationData = z.infer<typeof registrationSchema>;
