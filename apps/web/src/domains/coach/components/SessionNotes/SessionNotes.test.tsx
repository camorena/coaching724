import { render, screen } from '@testing-library/react';
import { SessionNotes } from './SessionNotes';

describe('SessionNotes', () => {
  it('renders children correctly', () => {
    render(<SessionNotes>Test Content</SessionNotes>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
