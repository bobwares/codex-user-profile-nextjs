/**
 * App: Customer Registration
 * Package: config
 * File: tailwind.config.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: config
 * Description: Tailwind CSS configuration defining content paths and theme extensions for the wizard UI.
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f5ff',
          100: '#e6ebff',
          200: '#c4cdff',
          300: '#9eacff',
          400: '#7486ff',
          500: '#4a5fff',
          600: '#3649db',
          700: '#2736aa',
          800: '#1b2579',
          900: '#10174f'
        }
      }
    }
  },
  plugins: [],
};

export default config;
