/**
 * App: Codex User Profile Next.js
 * Package: pages
 * File: _app.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default
 * Description: Custom App component providing global providers and an error boundary wrapper.
 */

import type { AppProps } from 'next/app';
import { Component, type ErrorInfo, type ReactNode } from 'react';

import { AppProvider } from '@/store/AppContext';

class ErrorBoundary extends Component<{ readonly children: ReactNode }, { hasError: boolean }> {
  public override state = { hasError: false };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Application error boundary caught an error:', error, info);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <h1 className="text-2xl font-semibold text-slate-900">Something went wrong.</h1>
            <p className="mt-2 text-slate-600">
              Please refresh the page or contact support if the problem persists.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function MyApp({ Component: PageComponent, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <AppProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <PageComponent {...pageProps} />
      </AppProvider>
    </ErrorBoundary>
  );
}
