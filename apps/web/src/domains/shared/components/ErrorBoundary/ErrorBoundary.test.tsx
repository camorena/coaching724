import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children correctly', () => {
    render(<ErrorBoundary>Test Content</ErrorBoundary>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
