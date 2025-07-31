import { render, screen } from '@testing-library/react';
import { FinancialReports } from './FinancialReports';

describe('FinancialReports', () => {
  it('renders children correctly', () => {
    render(<FinancialReports>Test Content</FinancialReports>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
