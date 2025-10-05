/**
 * App: Customer Registration
 * Package: src/components/client
 * File: SubmitButton.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: SubmitButton
 * Description: Client button that emits a telemetry event when clicked.
 */
'use client';

import { useState } from 'react';
import { trackClientEvent } from '@/lib/telemetry';

export type SubmitButtonProps = {
  label: string;
};

export function SubmitButton({ label }: SubmitButtonProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <button
      className="rounded-lg bg-brand-600 px-6 py-3 text-white shadow hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
      disabled={submitted}
      onClick={() => {
        trackClientEvent({ name: 'registration_submitted' });
        setSubmitted(true);
      }}
      type="button"
    >
      {submitted ? 'Submitted' : label}
    </button>
  );
}
