/**
 * App: Codex User Profile Next.js
 * Package: tests/containers
 * File: ThemeToggleContainer.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: none
 * Description: Confirms the theme toggle container dispatches the toggle action.
 */

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeToggleContainer } from '@/containers/ThemeToggleContainer';
import { AppProvider } from '@/store/AppContext';

describe('ThemeToggleContainer', () => {
  it('toggles theme on click', () => {
    render(
      <AppProvider>
        <ThemeToggleContainer />
      </AppProvider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button.textContent).toContain('light');
  });
});
