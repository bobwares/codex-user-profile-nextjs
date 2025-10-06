/**
 * App: Customer Registration
 * Package: services
 * File: geo.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: listCountries, listRegions
 * Description: Supplies mock geography data for the address step.
 */
const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' }
];

const REGIONS: Record<string, { code: string; name: string }[]> = {
  US: [
    { code: 'CA', name: 'California' },
    { code: 'NY', name: 'New York' }
  ],
  CA: [
    { code: 'ON', name: 'Ontario' },
    { code: 'BC', name: 'British Columbia' }
  ],
  GB: [
    { code: 'ENG', name: 'England' },
    { code: 'SCT', name: 'Scotland' }
  ],
  DE: [
    { code: 'BE', name: 'Berlin' },
    { code: 'BY', name: 'Bavaria' }
  ]
};

export async function listCountries(): Promise<typeof COUNTRIES> {
  return COUNTRIES;
}

export async function listRegions(country: string): Promise<{ code: string; name: string }[]> {
  return REGIONS[country] ?? [];
}
