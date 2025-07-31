import { render, screen } from '@testing-library/react';
import { FAQ } from './FAQ';

describe('FAQ', () => {
  it('renders children correctly', () => {
    render(<FAQ>Test Content</FAQ>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
