/**
 * App: Customer Registration
 * Package: src/app/api/customers/verify-phone
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: POST
 * Description: Mock route handler to validate phone verification codes.
 */
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { phone, code } = (await request.json()) as { phone?: string; code?: string };
  if (!phone || !code) {
    return NextResponse.json({ code: 'VALIDATION_ERROR', message: 'Phone and code required' }, { status: 400 });
  }
  if (code !== '123456') {
    return NextResponse.json({ code: 'INVALID_CODE' }, { status: 409 });
  }
  return new NextResponse(null, { status: 204 });
}
