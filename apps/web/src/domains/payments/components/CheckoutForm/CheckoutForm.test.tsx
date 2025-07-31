import { render, screen } from '@testing-library/react';
import { CheckoutForm } from './CheckoutForm';

describe('CheckoutForm', () => {
  it('renders children correctly', () => {
    render(<CheckoutForm>Test Content</CheckoutForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
