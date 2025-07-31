import { render, screen } from '@testing-library/react';
import { PaymentMethod } from './PaymentMethod';

describe('PaymentMethod', () => {
  it('renders children correctly', () => {
    render(<PaymentMethod>Test Content</PaymentMethod>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
