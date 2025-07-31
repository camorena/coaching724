import { render, screen } from '@testing-library/react';
import { InvoiceList } from './InvoiceList';

describe('InvoiceList', () => {
  it('renders children correctly', () => {
    render(<InvoiceList>Test Content</InvoiceList>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
