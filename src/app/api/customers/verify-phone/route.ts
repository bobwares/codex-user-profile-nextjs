/**
 * App: Customer Registration
 * Package: app/api
 * File: customers/verify-phone/route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: POST
 * Description: Placeholder endpoint for phone verification support.
 */
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { phone, code } = (await request.json()) as { phone?: string; code?: string };

  if (!phone || !code) {
    return NextResponse.json({ code: 'INVALID_REQUEST' }, { status: 400 });
  }

  return new NextResponse(null, { status: 204 });
}
