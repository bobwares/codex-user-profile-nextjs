/**
 * App: Customer Registration
 * Package: tests.routes
 * File: review.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the review step renders summary cards and submit action.
 */
import { render, screen } from '@testing-library/react';
import ReviewStepPage from '@/app/(wizard)/register/review/page';

describe('ReviewStepPage', () => {
  it('renders submit button', async () => {
    render(await ReviewStepPage());
    expect(screen.getByRole('button', { name: /submit registration/i })).toBeInTheDocument();
  });
});
