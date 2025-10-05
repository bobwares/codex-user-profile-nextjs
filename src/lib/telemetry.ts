/**
 * App: Customer Registration
 * Package: src/lib
 * File: telemetry.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: TelemetryEvent, trackClientEvent
 * Description: Provides a client-safe stub for tracking analytics events.
 */
'use client';

export type TelemetryEvent = {
  name: string;
  properties?: Record<string, string | number | boolean>;
};

export function trackClientEvent(event: TelemetryEvent) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug('Telemetry event', event);
  }
}
