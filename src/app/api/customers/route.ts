/**
 * App: Customer Registration
 * Package: app/api
 * File: customers/route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: POST
 * Description: Mock endpoint to create a customer record for development purposes.
 */
import { NextResponse } from 'next/server';

import { logServerEvent } from '@/lib/observability';
import { registrationSchema } from '@/lib/registrationSchema';

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const result = registrationSchema.safeParse(json);

  if (!result.success) {
    return NextResponse.json(
      { code: 'VALIDATION_ERROR', issues: result.error.issues },
      { status: 400 }
    );
  }

  const customerId = `c_${crypto.randomUUID()}`;
  logServerEvent({ name: 'api.customer.created', properties: { customerId } });

  return NextResponse.json({ customerId }, { status: 201 });
}
