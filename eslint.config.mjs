/**
 * App: Customer Registration
 * Package: config
 * File: eslint.config.mjs
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: defaultConfig
 * Description: ESLint flat config enabling Next.js linting rules and custom settings.
 */
import nextLint from 'eslint-config-next';

const defaultConfig = [
  ...nextLint(),
  {
    rules: {
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false
        }
      ]
    }
  }
];

export default defaultConfig;
