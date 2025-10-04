/**
 * App: Customer Registration
 * Package: src.app
 * File: loading.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: Loading
 * Description: Root loading indicator for suspenseful transitions across the wizard.
 */
const Loading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loading;
