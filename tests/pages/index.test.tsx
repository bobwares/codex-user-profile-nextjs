/**
 * App: Codex User Profile Next.js
 * Package: tests/pages
 * File: index.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: none
 * Description: Verifies the home page renders summary data using static props.
 */

import { render, screen } from '@testing-library/react';

import HomePage from '@/pages/index';
import type { HomeSummary } from '@/services/homeService';

const summary: HomeSummary = {
  title: 'Test Title',
  tagline: 'Test tagline',
  stats: {
    users: 10,
    projects: 2,
    uptime: '100%'
  }
};

describe('HomePage', () => {
  it('renders summary content', () => {
    render(<HomePage summary={summary} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test tagline')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
