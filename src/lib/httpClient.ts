/**
 * App: Codex User Profile Next.js
 * Package: lib
 * File: httpClient.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: ApiClientConfig, fetchJson
 * Description: Lightweight HTTP client helper that wraps fetch with defaults and error handling.
 */

export interface ApiClientConfig {
  readonly baseUrl: string;
  readonly headers?: Record<string, string>;
  readonly timeoutMs?: number;
  readonly retry?: {
    readonly attempts: number;
    readonly backoffMs: number;
  };
}

export async function fetchJson<T>(
  input: string,
  init: RequestInit = {},
  config?: ApiClientConfig
): Promise<T> {
  const controller = new AbortController();
  const timeout = config?.timeoutMs ?? 15000;
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  const headers = { 'Content-Type': 'application/json', ...(config?.headers ?? {}), ...(init.headers ?? {}) };

  const requestInit: RequestInit = {
    ...init,
    headers,
    signal: controller.signal
  };

  const attempts = Math.max(config?.retry?.attempts ?? 0, 0) + 1;
  const backoffMs = Math.max(config?.retry?.backoffMs ?? 0, 0);

  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(input, requestInit);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = (await response.json()) as T;
      clearTimeout(timeoutId);
      return data;
    } catch (error) {
      lastError = error;
      if (attempt < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, backoffMs));
      }
    }
  }

  clearTimeout(timeoutId);
  throw lastError;
}
