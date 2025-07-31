import { render, screen } from '@testing-library/react';
import { SubscriptionSelector } from './SubscriptionSelector';

describe('SubscriptionSelector', () => {
  it('renders children correctly', () => {
    render(<SubscriptionSelector>Test Content</SubscriptionSelector>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
