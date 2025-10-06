/**
 * App: Customer Registration
 * Package: app/api
 * File: health/route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: GET
 * Description: Health probe returning service status for uptime checks.
 */
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<{ status: string }>> {
  return NextResponse.json({ status: 'ok' });
}
