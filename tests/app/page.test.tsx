/**
 * App: Customer Registration
 * Package: tests/app
 * File: page.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: none
 * Description: Smoke test ensuring the landing page renders primary calls to action.
 */
import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders primary call to action', async () => {
    render(await HomePage());

    expect(screen.getByText(/start registration/i)).toBeInTheDocument();
    expect(
      screen.getByText(/multi-step onboarding flow that captures verified identity/i)
    ).toBeInTheDocument();
  });
});
