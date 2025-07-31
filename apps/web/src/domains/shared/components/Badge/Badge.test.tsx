import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Content</Badge>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
