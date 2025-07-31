import { render, screen } from '@testing-library/react';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  it('renders children correctly', () => {
    render(<FeatureCard>Test Content</FeatureCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
