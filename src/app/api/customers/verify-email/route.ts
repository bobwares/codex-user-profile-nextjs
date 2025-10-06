/**
 * App: Customer Registration
 * Package: app/api
 * File: customers/verify-email/route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: POST
 * Description: Mock endpoint for confirming email verification tokens.
 */
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { token } = (await request.json()) as { token?: string };

  if (!token) {
    return NextResponse.json({ code: 'INVALID_TOKEN' }, { status: 400 });
  }

  return new NextResponse(null, { status: 204 });
}
