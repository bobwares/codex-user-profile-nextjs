/**
 * App: Customer Registration
 * Package: src/app/api/geo/countries
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: GET
 * Description: Returns a static list of supported countries for the registration forms.
 */
import { NextResponse } from 'next/server';

const countries = ['US', 'CA', 'GB', 'DE'];

export function GET() {
  return NextResponse.json(countries, { status: 200 });
}
