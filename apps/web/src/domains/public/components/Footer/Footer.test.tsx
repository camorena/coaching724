import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders children correctly', () => {
    render(<Footer>Test Content</Footer>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
