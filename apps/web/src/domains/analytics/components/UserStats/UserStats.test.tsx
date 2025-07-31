import { render, screen } from '@testing-library/react';
import { UserStats } from './UserStats';

describe('UserStats', () => {
  it('renders children correctly', () => {
    render(<UserStats>Test Content</UserStats>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
