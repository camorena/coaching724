import { render, screen } from '@testing-library/react';
import { PaymentStatus } from './PaymentStatus';

describe('PaymentStatus', () => {
  it('renders children correctly', () => {
    render(<PaymentStatus>Test Content</PaymentStatus>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
