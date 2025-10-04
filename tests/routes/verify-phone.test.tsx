/**
 * App: Customer Registration
 * Package: tests.routes
 * File: verify-phone.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the phone verification page renders the code form.
 */
import { render, screen } from '@testing-library/react';
import PhoneVerificationPage from '@/app/verify/phone/page';

describe('PhoneVerificationPage', () => {
  it('renders verification code input', async () => {
    render(await PhoneVerificationPage());
    expect(screen.getByLabelText(/verification code/i)).toBeInTheDocument();
  });
});
