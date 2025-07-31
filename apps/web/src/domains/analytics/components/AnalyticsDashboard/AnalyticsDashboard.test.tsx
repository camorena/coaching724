import { render, screen } from '@testing-library/react';
import { AnalyticsDashboard } from './AnalyticsDashboard';

describe('AnalyticsDashboard', () => {
  it('renders children correctly', () => {
    render(<AnalyticsDashboard>Test Content</AnalyticsDashboard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
