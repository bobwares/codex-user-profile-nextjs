/**
 * App: Codex User Profile Next.js
 * Package: containers
 * File: ThemeToggleContainer.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: ThemeToggleContainer
 * Description: Container component managing theme toggle interactions via the App context.
 */

import { ThemeToggle } from '@/components/ThemeToggle';
import { useApp } from '@/store/AppContext';

export function ThemeToggleContainer() {
  const {
    state: { theme },
    dispatch
  } = useApp();

  return <ThemeToggle theme={theme} onToggle={() => dispatch({ type: 'toggleTheme' })} />;
}
