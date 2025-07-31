import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders children correctly', () => {
    render(<Input>Test Content</Input>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
