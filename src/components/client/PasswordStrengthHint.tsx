/**
 * App: Customer Registration
 * Package: src/components/client
 * File: PasswordStrengthHint.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: PasswordStrengthHint
 * Description: Displays a live hint describing password strength as the user types.
 */
'use client';

import { useMemo, useState } from 'react';

export type PasswordStrengthHintProps = {
  inputId?: string;
};

export function PasswordStrengthHint({ inputId }: PasswordStrengthHintProps) {
  const [password, setPassword] = useState('');

  const score = useMemo(() => {
    let value = 0;
    if (password.length >= 12) value += 1;
    if (/[A-Z]/.test(password)) value += 1;
    if (/[0-9]/.test(password)) value += 1;
    if (/[^A-Za-z0-9]/.test(password)) value += 1;
    return value;
  }, [password]);

  const description = ['Too short', 'Fair', 'Good', 'Strong', 'Excellent'][score];
  const colorScale = ['text-red-600', 'text-orange-600', 'text-amber-600', 'text-green-600', 'text-emerald-600'][score];

  return (
    <div className="space-y-2">
      <input
        aria-describedby="password-strength-description"
        className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-brand-400 focus:outline-none"
        id={inputId}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Create a secure password"
        type="password"
      />
      <p className={`text-sm font-medium ${colorScale}`} id="password-strength-description">
        Strength: {description}
      </p>
    </div>
  );
}
