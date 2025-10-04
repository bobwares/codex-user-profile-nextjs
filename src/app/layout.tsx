/**
 * App: Customer Registration
 * Package: src.app
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: metadata, RootLayout
 * Description: Root layout establishing global metadata, fonts, and providers for the wizard.
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RegistrationProgressProvider } from '@/lib/providers/registration-progress-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Customer Registration Wizard',
  description: 'Multi-step onboarding experience for new customers.',
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className="bg-slate-50">
    <body className={`${inter.className} min-h-screen bg-slate-50`}> 
      <RegistrationProgressProvider>
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-8">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-500">Acme Services</p>
              <h1 className="text-2xl font-bold text-slate-900">Customer Registration</h1>
            </div>
            <span className="rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Secure Onboarding
            </span>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 border-t border-slate-200 pt-4 text-sm text-slate-500">
            <p>&copy; {new Date().getUTCFullYear()} Acme Services. All rights reserved.</p>
          </footer>
        </div>
      </RegistrationProgressProvider>
    </body>
  </html>
);

export default RootLayout;
