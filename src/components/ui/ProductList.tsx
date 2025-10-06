/**
 * App: Customer Registration
 * Package: components/ui
 * File: ProductList.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: ProductList
 * Description: Renders featured product cards for the landing page.
 */
import type { Product } from '@/services/catalog';

export function ProductList({ products }: { products: Product[] }): JSX.Element {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-3 text-sm text-slate-600">{product.description}</p>
          </div>
          <a className="mt-6 inline-flex items-center text-sm font-medium" href="#">
            {product.cta}
          </a>
        </article>
      ))}
    </div>
  );
}
