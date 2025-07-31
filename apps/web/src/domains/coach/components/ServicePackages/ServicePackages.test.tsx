import { render, screen } from '@testing-library/react';
import { ServicePackages } from './ServicePackages';

describe('ServicePackages', () => {
  it('renders children correctly', () => {
    render(<ServicePackages>Test Content</ServicePackages>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
