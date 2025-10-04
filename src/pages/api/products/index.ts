/**
 * App: Codex User Profile Next.js
 * Package: pages/api
 * File: products/index.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default, catalog
 * Description: Mock API endpoint providing a list of products.
 */

import type { NextApiRequest, NextApiResponse } from 'next';

const catalog = [
  {
    id: '1',
    name: 'Ada Lovelace Tee',
    description: 'Celebrate the first computer programmer with this soft tri-blend tee.',
    price: 29.99,
    imageUrl: 'https://images.example.com/products/ada.jpg'
  },
  {
    id: '2',
    name: 'Grace Hopper Hoodie',
    description: 'Cozy hoodie featuring Admiral Hopper and her pioneering compiler work.',
    price: 59.99,
    imageUrl: 'https://images.example.com/products/grace.jpg'
  },
  {
    id: '3',
    name: 'Alan Turing Notebook',
    description: 'Grid notebook inspired by the Enigma code breaker.',
    price: 19.99,
    imageUrl: 'https://images.example.com/products/turing.jpg'
  }
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(catalog);
}

export { catalog };
