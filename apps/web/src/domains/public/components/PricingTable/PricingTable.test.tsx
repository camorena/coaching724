import { render, screen } from '@testing-library/react';
import { PricingTable } from './PricingTable';

describe('PricingTable', () => {
  it('renders children correctly', () => {
    render(<PricingTable>Test Content</PricingTable>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
