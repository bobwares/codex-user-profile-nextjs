/**
 * App: Customer Registration
 * Package: config
 * File: tailwind.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: config
 * Description: Tailwind CSS configuration for project styles.
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6ff',
          100: '#d9e6ff',
          200: '#b0c8ff',
          300: '#88aaff',
          400: '#5f8cff',
          500: '#366eff',
          600: '#2156e6',
          700: '#1a44b4',
          800: '#143282',
          900: '#0d2050'
        }
      }
    }
  },
  plugins: []
};

export default config;
