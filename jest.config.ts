/**
 * App: Codex User Profile Next.js
 * Package: config
 * File: jest.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: config
 * Description: Jest configuration enabling React Testing Library for the Pages Router project.
 */

import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx'
  ]
};

export default config;
