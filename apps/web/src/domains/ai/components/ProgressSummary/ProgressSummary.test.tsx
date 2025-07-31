import { render, screen } from '@testing-library/react';
import { ProgressSummary } from './ProgressSummary';

describe('ProgressSummary', () => {
  it('renders children correctly', () => {
    render(<ProgressSummary>Test Content</ProgressSummary>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
