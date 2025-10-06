/**
 * App: Customer Registration
 * Package: app/api
 * File: geo/regions/route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: GET
 * Description: Returns regions/states for the requested country code.
 */
import { NextResponse } from 'next/server';

import { listRegions } from '@/services/geo';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');

  if (!country) {
    return NextResponse.json({ code: 'COUNTRY_REQUIRED' }, { status: 400 });
  }

  const regions = await listRegions(country);
  return NextResponse.json(regions);
}
