/**
 * App: Customer Registration
 * Package: config
 * File: .eslintrc.js
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: module.exports
 * Description: ESLint configuration leveraging Next.js defaults with custom rules for the wizard.
 */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    'import/prefer-default-export': 'off'
  }
};
