/**
 * App: Customer Registration
 * Package: tests.routes
 * File: details.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the personal details step renders required fields.
 */
import { render, screen } from '@testing-library/react';
import DetailsStepPage from '@/app/(wizard)/register/details/page';

describe('DetailsStepPage', () => {
  it('renders first and last name inputs', async () => {
    render(await DetailsStepPage());
    expect(screen.getByLabelText(/legal first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/legal last name/i)).toBeInTheDocument();
  });
});
