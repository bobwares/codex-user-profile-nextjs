/**
 * App: Codex User Profile Next.js
 * Package: tests/components
 * File: ProductListView.test.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: none
 * Description: Ensures the product list view renders each product entry.
 */

import { render, screen } from '@testing-library/react';

import { ProductListView } from '@/components/ProductListView';

const products = [
  {
    id: '1',
    name: 'Sample One',
    description: 'First product',
    price: 10,
    imageUrl: 'https://example.com/1.jpg'
  },
  {
    id: '2',
    name: 'Sample Two',
    description: 'Second product',
    price: 20,
    imageUrl: 'https://example.com/2.jpg'
  }
];

describe('ProductListView', () => {
  it('renders product names', () => {
    render(<ProductListView products={products} />);

    expect(screen.getByText('Sample One')).toBeInTheDocument();
    expect(screen.getByText('Sample Two')).toBeInTheDocument();
  });
});
