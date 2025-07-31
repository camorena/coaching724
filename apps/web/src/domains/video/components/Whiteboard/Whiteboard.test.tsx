import { render, screen } from '@testing-library/react';
import { Whiteboard } from './Whiteboard';

describe('Whiteboard', () => {
  it('renders children correctly', () => {
    render(<Whiteboard>Test Content</Whiteboard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
