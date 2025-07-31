import { render, screen } from '@testing-library/react';
import { Testimonial } from './Testimonial';

describe('Testimonial', () => {
  it('renders children correctly', () => {
    render(<Testimonial>Test Content</Testimonial>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
