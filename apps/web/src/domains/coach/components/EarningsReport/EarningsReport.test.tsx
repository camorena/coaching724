import { render, screen } from '@testing-library/react';
import { EarningsReport } from './EarningsReport';

describe('EarningsReport', () => {
  it('renders children correctly', () => {
    render(<EarningsReport>Test Content</EarningsReport>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
