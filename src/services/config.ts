/**
 * App: Codex User Profile Next.js
 * Package: services
 * File: config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: serviceConfig
 * Description: Shared configuration for service layer including base URL and retry strategy.
 */

import type { ApiClientConfig } from '@/lib/httpClient';

const baseUrl = process.env.API_BASE ?? 'http://localhost:3000';

export const serviceConfig: ApiClientConfig = {
  baseUrl,
  headers: {
    Accept: 'application/json'
  },
  timeoutMs: 15000,
  retry: {
    attempts: 2,
    backoffMs: 250
  }
};
