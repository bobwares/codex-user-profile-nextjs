/**
 * App: Customer Registration
 * Package: tests.routes
 * File: verify-email.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the email verification page renders resend affordance.
 */
import { render, screen } from '@testing-library/react';
import EmailVerificationPage from '@/app/verify/email/page';

describe('EmailVerificationPage', () => {
  it('renders resend button', async () => {
    render(await EmailVerificationPage());
    expect(screen.getByRole('button', { name: /resend verification email/i })).toBeInTheDocument();
  });
});
