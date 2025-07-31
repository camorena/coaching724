import { render, screen } from '@testing-library/react';
import { TwoFactorAuth } from './TwoFactorAuth';

describe('TwoFactorAuth', () => {
  it('renders children correctly', () => {
    render(<TwoFactorAuth>Test Content</TwoFactorAuth>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
