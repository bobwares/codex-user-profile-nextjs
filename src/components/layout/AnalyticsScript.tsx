/**
 * App: Customer Registration
 * Package: components/layout
 * File: AnalyticsScript.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: AnalyticsScript
 * Description: Injects a lightweight analytics bootstrap script for funnel tracking.
 */
'use client';

import { useEffect } from 'react';

export function AnalyticsScript(): null {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.dispatchEvent(
      new CustomEvent('analytics:boot', {
        detail: { source: 'customer-registration', timestamp: Date.now() }
      })
    );
  }, []);

  return null;
}
