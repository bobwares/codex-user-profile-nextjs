/**
 * App: Codex User Profile Next.js
 * Package: services
 * File: homeService.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: HomeSummary, getHomeSummary
 * Description: Service module responsible for retrieving data for the landing page.
 */

import { fetchJson } from '@/lib/httpClient';
import { serviceConfig } from '@/services/config';

export interface HomeSummary {
  readonly title: string;
  readonly tagline: string;
  readonly stats: {
    readonly users: number;
    readonly projects: number;
    readonly uptime: string;
  };
}

export async function getHomeSummary(): Promise<HomeSummary> {
  const url = `${serviceConfig.baseUrl}/api/summary`;
  return fetchJson<HomeSummary>(url, undefined, serviceConfig);
}
