/**
 * App: Customer Registration
 * Package: services
 * File: customers.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: CustomerPayload, createCustomer, verifyEmail
 * Description: Server-side client for registration API endpoints.
 */
import 'server-only';

import { logServerEvent } from '@/lib/observability';
import type { RegistrationData } from '@/lib/registrationSchema';

export type CustomerPayload = RegistrationData;

const API_BASE = process.env.API_BASE ?? 'http://localhost:3000';

export async function createCustomer(payload: CustomerPayload): Promise<{ customerId: string }>{
  const response = await fetch(`${API_BASE}/api/customers`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    logServerEvent({ name: 'customer.create.failed', properties: { status: response.status } });
    throw new Error('Failed to create customer');
  }

  const data = (await response.json()) as { customerId: string };
  logServerEvent({ name: 'customer.create.succeeded', properties: { customerId: data.customerId } });
  return data;
}

export async function verifyEmail(token: string): Promise<void> {
  const response = await fetch(`${API_BASE}/api/customers/verify-email`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ token })
  });

  if (!response.ok) {
    logServerEvent({ name: 'customer.verify-email.failed', properties: { status: response.status } });
    throw new Error('Failed to verify email');
  }

  logServerEvent({ name: 'customer.verify-email.succeeded' });
}
