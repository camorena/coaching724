import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders children correctly', () => {
    render(<Hero>Test Content</Hero>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
