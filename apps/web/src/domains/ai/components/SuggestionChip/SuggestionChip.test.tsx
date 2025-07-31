import { render, screen } from '@testing-library/react';
import { SuggestionChip } from './SuggestionChip';

describe('SuggestionChip', () => {
  it('renders children correctly', () => {
    render(<SuggestionChip>Test Content</SuggestionChip>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
