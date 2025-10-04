/**
 * App: Codex User Profile Next.js
 * Package: pages/api
 * File: products/[id].ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default
 * Description: Mock API endpoint for fetching a single product from the catalog.
 */

import type { NextApiRequest, NextApiResponse } from 'next';

import { catalog } from '@/pages/api/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = catalog.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  res.status(200).json(product);
}
