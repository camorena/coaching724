import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('renders children correctly', () => {
    render(<Loader>Test Content</Loader>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
