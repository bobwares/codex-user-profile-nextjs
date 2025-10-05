/**
 * App: Codex User Profile Next.js
 * Package: pages
 * File: products/index.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default, getStaticProps
 * Description: Products listing page statically generated with incremental revalidation.
 */

import type { GetStaticProps } from 'next';

import { Layout } from '@/components/Layout';
import { ProductListView } from '@/components/ProductListView';
import type { ProductSummary } from '@/services/catalogService';
import { listProducts } from '@/services/catalogService';

interface ProductsPageProps {
  readonly products: ProductSummary[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <Layout title="Product Catalog">
      <ProductListView products={products} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const products = await listProducts();
  return {
    props: { products },
    revalidate: 900
  };
};
