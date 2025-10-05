/**
 * App: Customer Registration
 * Package: src/app/api/customers/verify-email
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: POST
 * Description: Mock route handler to confirm email verification tokens.
 */
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { token } = (await request.json()) as { token?: string };
  if (!token) {
    return NextResponse.json({ code: 'VALIDATION_ERROR', message: 'Token required' }, { status: 400 });
  }
  if (token === 'expired') {
    return NextResponse.json({ code: 'TOKEN_EXPIRED' }, { status: 410 });
  }
  return new NextResponse(null, { status: 204 });
}
