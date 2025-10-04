/**
 * App: Customer Registration
 * Package: config
 * File: jest.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: config
 * Description: Jest configuration integrating next/jest for testing wizard components.
 */
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});

const config = createJestConfig({
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
});

export default config;
