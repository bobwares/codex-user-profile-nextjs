/**
 * App: Customer Registration
 * Package: src.components.ui
 * File: ProductList.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: ProductList
 * Description: Presentational component highlighting complementary products during registration.
 */
import { fetchFeaturedProducts } from '@/services/catalog';

const ProductList = async () => {
  const products = await fetchFeaturedProducts();

  return (
    <section aria-labelledby="product-list" className="mt-12">
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="product-list" className="text-lg font-semibold text-slate-900">
              Enhance your onboarding stack
            </h2>
            <p className="text-sm text-slate-500">
              Explore add-ons that pair well with the registration wizard.
            </p>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-brand-500">Recommended</span>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <li key={product.id} className="flex flex-col gap-2 rounded-lg border border-slate-200 p-4">
              <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-600">{product.description}</p>
              <span className="mt-auto text-sm font-medium text-brand-600">{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { ProductList };
