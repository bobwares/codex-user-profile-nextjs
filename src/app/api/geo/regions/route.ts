/**
 * App: Customer Registration
 * Package: src/app/api/geo/regions
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: GET
 * Description: Returns region subsets filtered by country for address validation.
 */
import { NextResponse } from 'next/server';

const regionDirectory: Record<string, { country: string; code: string; name: string }[]> = {
  US: [
    { country: 'US', code: 'CA', name: 'California' },
    { country: 'US', code: 'NY', name: 'New York' }
  ],
  CA: [
    { country: 'CA', code: 'ON', name: 'Ontario' },
    { country: 'CA', code: 'BC', name: 'British Columbia' }
  ]
};

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') ?? 'US';
  const regions = regionDirectory[country] ?? [];
  return NextResponse.json(regions, { status: 200 });
}
