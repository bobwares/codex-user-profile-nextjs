/**
 * App: Customer Registration
 * Package: tests.routes
 * File: home.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test verifying the landing page renders hero content and CTA.
 */
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders hero headline and primary call-to-action', async () => {
    render(await HomePage());
    expect(
      screen.getByRole('heading', { name: /customer registration wizard/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start registration/i })).toBeInTheDocument();
  });
});
