/**
 * App: Customer Registration
 * Package: src.app.api.geo.regions
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GET
 * Description: Mock endpoint returning regions for the requested country to support address forms.
 */
import { NextRequest, NextResponse } from 'next/server';

const GET = async (request: NextRequest) => {
  const country = request.nextUrl.searchParams.get('country') ?? 'US';
  const regions = [
    { country: 'US', code: 'CA', name: 'California' },
    { country: 'US', code: 'NY', name: 'New York' },
    { country: 'CA', code: 'ON', name: 'Ontario' },
  ].filter((region) => region.country === country);
  return NextResponse.json(regions);
};

export { GET };
