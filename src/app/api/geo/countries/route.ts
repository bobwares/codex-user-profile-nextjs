/**
 * App: Customer Registration
 * Package: app/api
 * File: geo/countries/route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: GET
 * Description: Returns available countries for address capture.
 */
import { NextResponse } from 'next/server';

import { listCountries } from '@/services/geo';

export async function GET(): Promise<NextResponse> {
  const countries = await listCountries();
  return NextResponse.json(countries);
}
