/**
 * App: Customer Registration
 * Package: tests.routes
 * File: account.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the account step renders form inputs.
 */
import { render, screen } from '@testing-library/react';
import AccountStepPage from '@/app/(wizard)/register/account/page';

describe('AccountStepPage', () => {
  it('renders email and password inputs', async () => {
    render(await AccountStepPage());
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});
