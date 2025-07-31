import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('Calendar', () => {
  it('renders children correctly', () => {
    render(<Calendar>Test Content</Calendar>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
