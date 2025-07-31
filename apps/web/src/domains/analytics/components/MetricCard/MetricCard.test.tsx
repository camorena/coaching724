import { render, screen } from '@testing-library/react';
import { MetricCard } from './MetricCard';

describe('MetricCard', () => {
  it('renders children correctly', () => {
    render(<MetricCard>Test Content</MetricCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
