/**
 * App: Customer Registration
 * Package: services
 * File: catalog.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-05T23:29:09Z
 * Exports: Product, listFeaturedProducts
 * Description: Provides mocked catalog data for landing page merchandising.
 */
export type Product = {
  id: string;
  name: string;
  description: string;
  cta: string;
};

const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'identity-protection',
    name: 'Identity Protection',
    description: 'Safeguard customer identity with adaptive verification workflows.',
    cta: 'Explore identity services'
  },
  {
    id: 'global-notifications',
    name: 'Global Notifications',
    description: 'Deliver transactional email and SMS across 180+ countries.',
    cta: 'See messaging APIs'
  },
  {
    id: 'compliance-toolkit',
    name: 'Compliance Toolkit',
    description: 'Track customer consents and regulatory attestations in one place.',
    cta: 'Review compliance hub'
  }
];

export async function listFeaturedProducts(): Promise<Product[]> {
  return FEATURED_PRODUCTS;
}
