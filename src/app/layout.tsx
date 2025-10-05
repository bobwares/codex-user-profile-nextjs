/**
 * App: Customer Registration
 * Package: src/app
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: metadata, RootLayout
 * Description: Defines the root layout with global fonts, metadata, and consistent shell for the wizard.
 */
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Customer Registration Wizard',
    template: '%s · Customer Registration'
  },
  description: 'A multi-step registration experience for onboarding new customers.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
          <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <span className="text-xl font-semibold text-brand-600">Customer Registration</span>
              <nav aria-label="Primary navigation" className="text-sm text-slate-600">
                <a className="font-medium" href="/register">
                  Start Registration
                </a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
          <footer className="border-t border-slate-200 bg-white/90 py-6 text-center text-sm text-slate-500">
            &copy; {new Date().getUTCFullYear()} Customer Registration. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
