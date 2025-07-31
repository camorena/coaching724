import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders children correctly', () => {
    render(<Toast>Test Content</Toast>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
