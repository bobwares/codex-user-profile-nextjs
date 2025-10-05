/**
 * App: Customer Registration
 * Package: src/services
 * File: geo.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: listCountries, listRegions
 * Description: Provides server-side helpers to fetch geographic reference data for forms.
 */
const baseUrl = process.env.API_BASE ?? 'http://localhost:3000';

export async function listCountries(): Promise<string[]> {
  const response = await fetch(`${baseUrl}/api/geo/countries`, {
    headers: { Accept: 'application/json' },
    cache: 'force-cache'
  });
  if (!response.ok) {
    throw new Error('Unable to load countries');
  }
  return (await response.json()) as string[];
}

export type Region = {
  country: string;
  code: string;
  name: string;
};

export async function listRegions(country: string): Promise<Region[]> {
  const response = await fetch(`${baseUrl}/api/geo/regions?country=${country}`, {
    headers: { Accept: 'application/json' },
    cache: 'no-cache'
  });
  if (!response.ok) {
    throw new Error('Unable to load regions');
  }
  return (await response.json()) as Region[];
}
