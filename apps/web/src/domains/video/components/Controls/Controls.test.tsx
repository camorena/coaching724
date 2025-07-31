import { render, screen } from '@testing-library/react';
import { Controls } from './Controls';

describe('Controls', () => {
  it('renders children correctly', () => {
    render(<Controls>Test Content</Controls>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
