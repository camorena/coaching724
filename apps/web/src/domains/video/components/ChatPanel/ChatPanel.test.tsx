import { render, screen } from '@testing-library/react';
import { ChatPanel } from './ChatPanel';

describe('ChatPanel', () => {
  it('renders children correctly', () => {
    render(<ChatPanel>Test Content</ChatPanel>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
