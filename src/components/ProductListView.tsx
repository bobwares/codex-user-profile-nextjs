/**
 * App: Codex User Profile Next.js
 * Package: components
 * File: ProductListView.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: ProductListView
 * Description: Presentational component rendering a grid of catalog products.
 */

import type { ProductSummary } from '@/services/catalogService';

interface ProductListViewProps {
  readonly products: ProductSummary[];
}

export function ProductListView({ products }: ProductListViewProps) {
  if (products.length === 0) {
    return <p className="text-slate-600">No products are available yet. Check back soon.</p>;
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {products.map((product) => (
        <li key={product.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-slate-600">{product.description}</p>
            </div>
            <span className="ml-4 text-lg font-medium text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
