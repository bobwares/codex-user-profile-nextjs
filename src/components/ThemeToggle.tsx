/**
 * App: Codex User Profile Next.js
 * Package: components
 * File: ThemeToggle.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: ThemeToggle
 * Description: Presentational toggle used to switch application theme.
 */

interface ThemeToggleProps {
  readonly theme: 'light' | 'dark';
  readonly onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-100"
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
