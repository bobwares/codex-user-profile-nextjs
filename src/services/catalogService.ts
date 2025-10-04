/**
 * App: Codex User Profile Next.js
 * Package: services
 * File: catalogService.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: ProductSummary, listProducts, getProduct
 * Description: Product catalog service providing list and detail queries for pages.
 */

import { fetchJson } from '@/lib/httpClient';
import { serviceConfig } from '@/services/config';

export interface ProductSummary {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly imageUrl: string;
}

export async function listProducts(): Promise<ProductSummary[]> {
  const url = `${serviceConfig.baseUrl}/api/products`;
  return fetchJson<ProductSummary[]>(url, undefined, serviceConfig);
}

export async function getProduct(id: string): Promise<ProductSummary> {
  const url = `${serviceConfig.baseUrl}/api/products/${id}`;
  return fetchJson<ProductSummary>(url, undefined, serviceConfig);
}
