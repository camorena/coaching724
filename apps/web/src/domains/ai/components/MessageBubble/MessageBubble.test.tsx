import { render, screen } from '@testing-library/react';
import { MessageBubble } from './MessageBubble';

describe('MessageBubble', () => {
  it('renders children correctly', () => {
    render(<MessageBubble>Test Content</MessageBubble>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
