/**
 * App: Codex User Profile Next.js
 * Package: components
 * File: ProductDetailView.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: ProductDetailView
 * Description: Presentational component displaying a single product detail.
 */

import type { ProductSummary } from '@/services/catalogService';

interface ProductDetailViewProps {
  readonly product: ProductSummary;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  return (
    <article className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">{product.name}</h2>
        <p className="mt-2 text-slate-600">{product.description}</p>
      </header>
      <div className="text-lg font-medium text-indigo-600">${product.price.toFixed(2)}</div>
      <img
        alt={product.name}
        src={product.imageUrl}
        className="h-64 w-full rounded-md object-cover"
      />
    </article>
  );
}
