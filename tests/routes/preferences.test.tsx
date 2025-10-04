/**
 * App: Customer Registration
 * Package: tests.routes
 * File: preferences.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the preferences step renders consent checkboxes.
 */
import { render, screen } from '@testing-library/react';
import PreferencesStepPage from '@/app/(wizard)/register/preferences/page';

describe('PreferencesStepPage', () => {
  it('renders required consent checkboxes', async () => {
    render(await PreferencesStepPage());
    expect(screen.getByLabelText(/terms of service/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/privacy policy/i)).toBeInTheDocument();
  });
});
