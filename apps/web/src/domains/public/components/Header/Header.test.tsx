import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders children correctly', () => {
    render(<Header>Test Content</Header>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
