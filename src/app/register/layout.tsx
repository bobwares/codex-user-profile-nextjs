/**
 * App: Customer Registration
 * Package: src/app/register
 * File: layout.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares
 * Date: 2025-10-05T19:19:36Z
 * Exports: RegisterLayout
 * Description: Provides the layout shell for all registration steps.
 */
export default function RegisterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="space-y-8">{children}</div>;
}
