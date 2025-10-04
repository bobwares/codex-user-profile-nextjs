/**
 * App: Customer Registration
 * Package: src.services
 * File: customer.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: createCustomer, verifyEmail, verifyPhone
 * Description: Service layer for interacting with the customer registration API endpoints.
 */
const API_BASE = process.env.API_BASE ?? 'http://localhost:3000';

interface CustomerPayload {
  readonly email: string;
  readonly password: string;
  readonly phone?: string;
  readonly profile: {
    readonly firstName: string;
    readonly lastName: string;
    readonly preferredName?: string;
    readonly dateOfBirth?: string;
    readonly gender?: string;
    readonly pronouns?: string;
  };
  readonly address: {
    readonly country: string;
    readonly line1: string;
    readonly line2?: string;
    readonly city: string;
    readonly region: string;
    readonly postalCode: string;
    readonly timeZone?: string;
  };
  readonly preferences: {
    readonly language: string;
    readonly communication: {
      readonly email: boolean;
      readonly sms: boolean;
    };
    readonly marketingOptIn: boolean;
  };
  readonly consents: {
    readonly termsAccepted: boolean;
    readonly privacyAccepted: boolean;
    readonly ageConfirmed: boolean;
  };
}

interface CreateCustomerResponse {
  readonly customerId: string;
}

const createCustomer = async (payload: CustomerPayload): Promise<CreateCustomerResponse> => {
  const response = await fetch(`${API_BASE}/api/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to create customer');
  }

  return response.json();
};

const verifyEmail = async (token: string): Promise<void> => {
  const response = await fetch(`${API_BASE}/api/customers/verify-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to verify email');
  }
};

const verifyPhone = async (phone: string, code: string): Promise<void> => {
  const response = await fetch(`${API_BASE}/api/customers/verify-phone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone, code }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to verify phone');
  }
};

export type { CustomerPayload, CreateCustomerResponse };
export { createCustomer, verifyEmail, verifyPhone };
