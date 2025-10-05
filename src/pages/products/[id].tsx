/**
 * App: Codex User Profile Next.js
 * Package: pages
 * File: products/[id].tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default, getServerSideProps
 * Description: Server-side rendered product detail page for personalized content.
 */

import type { GetServerSideProps } from 'next';

import { Layout } from '@/components/Layout';
import { ProductDetailView } from '@/components/ProductDetailView';
import type { ProductSummary } from '@/services/catalogService';
import { getProduct } from '@/services/catalogService';

interface ProductDetailPageProps {
  readonly product: ProductSummary;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <Layout title={product.name}>
      <ProductDetailView product={product} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ProductDetailPageProps> = async ({ params }) => {
  const productId = params?.id;
  if (typeof productId !== 'string') {
    return { notFound: true };
  }

  try {
    const product = await getProduct(productId);
    return { props: { product } };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to load product detail', error);
    return { notFound: true };
  }
};
