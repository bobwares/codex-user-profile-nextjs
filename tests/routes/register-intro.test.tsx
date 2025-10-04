/**
 * App: Customer Registration
 * Package: tests.routes
 * File: register-intro.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the register intro step renders overview content.
 */
import { render, screen } from '@testing-library/react';
import RegisterIntroPage from '@/app/(wizard)/register/page';

describe('RegisterIntroPage', () => {
  it('shows the step description and next link', async () => {
    render(await RegisterIntroPage());
    expect(screen.getByText(/what you will need/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /continue to account/i })).toBeInTheDocument();
  });
});
