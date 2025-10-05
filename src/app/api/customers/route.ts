/**
 * App: Customer Registration
 * Package: src/app/api/customers
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: POST
 * Description: Mock route handler for creating a customer record during registration.
 */
import { NextResponse } from 'next/server';

type CustomerPayload = {
  account: {
    email: string;
    phone?: string;
  };
  name: {
    first: string;
    last: string;
  };
  address: {
    country: string;
    line1: string;
    city: string;
    region: string;
    postalCode: string;
  };
  preferences: {
    language: string;
    marketingOptIn: boolean;
  };
};

export async function POST(request: Request) {
  const payload = (await request.json()) as CustomerPayload;
  if (!payload.account?.email) {
    return NextResponse.json(
      { code: 'VALIDATION_ERROR', fieldErrors: [{ field: 'account.email', message: 'Email is required' }] },
      { status: 400 }
    );
  }

  return NextResponse.json({ customerId: 'c_123' }, { status: 201 });
}
