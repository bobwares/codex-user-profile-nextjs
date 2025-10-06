/**
 * App: Customer Registration
 * Package: app
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: metadata, RootLayout
 * Description: Defines the HTML shell and shared layout for all routes.
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { AnalyticsScript } from '@/components/layout/AnalyticsScript';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Customer Registration Wizard',
  description:
    'Complete the onboarding flow to create a secure, verified customer account and manage communication preferences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className="bg-slate-50">
      <body className={`${inter.className} min-h-screen`}>
        <AnalyticsScript />
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold text-slate-900">
              Customer Registration
            </Link>
            <nav className="text-sm text-slate-600">
              <Link href="/register" className="font-medium">
                Start registration
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-4 text-sm text-slate-500">
            © {new Date().getUTCFullYear()} Customer Registration Platform
          </div>
        </footer>
      </body>
    </html>
  );
}
