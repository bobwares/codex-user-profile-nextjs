/**
 * App: Customer Registration
 * Package: tests.routes
 * File: address.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: none
 * Description: Smoke test ensuring the address step renders geo selectors.
 */
import { render, screen } from '@testing-library/react';
import AddressStepPage from '@/app/(wizard)/register/address/page';

describe('AddressStepPage', () => {
  it('renders country and region selectors', async () => {
    render(await AddressStepPage());
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/state \/ region/i)).toBeInTheDocument();
  });
});
