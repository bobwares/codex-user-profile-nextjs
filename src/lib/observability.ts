/**
 * App: Customer Registration
 * Package: lib
 * File: observability.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: logServerEvent
 * Description: Provides structured logging helpers for funnel monitoring.
 */
import { headers } from 'next/headers';

export type ObservabilityEvent = {
  name: string;
  properties?: Record<string, unknown>;
};

export function logServerEvent(event: ObservabilityEvent): void {
  const requestHeaders = headers();
  const traceId = requestHeaders.get('x-trace-id') ?? crypto.randomUUID();

  console.info(
    JSON.stringify({
      ...event,
      traceId,
      timestamp: new Date().toISOString(),
      component: 'customer-registration'
    })
  );
}
