/**
 * App: Customer Registration
 * Package: src.services
 * File: geo.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: fetchCountries, fetchRegions
 * Description: Geo lookup helpers fetching mock data from local API routes for addresses.
 */
const API_BASE = process.env.API_BASE ?? 'http://localhost:3000';

interface RegionResponse {
  readonly country: string;
  readonly code: string;
  readonly name: string;
}

const fetchCountries = async (): Promise<string[]> => {
  const response = await fetch(`${API_BASE}/api/geo/countries`, {
    method: 'GET',
    next: {
      revalidate: 3600,
      tags: ['geo']
    }
  });

  if (!response.ok) {
    throw new Error('Failed to load country list');
  }

  return response.json();
};

const fetchRegions = async (country: string): Promise<RegionResponse[]> => {
  const response = await fetch(`${API_BASE}/api/geo/regions?country=${country}`, {
    method: 'GET',
    next: {
      revalidate: 1800,
      tags: ['geo', `geo-${country}`]
    }
  });

  if (!response.ok) {
    throw new Error('Failed to load region list');
  }

  return response.json();
};

export type { RegionResponse };
export { fetchCountries, fetchRegions };
