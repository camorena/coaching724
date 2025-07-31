import { render, screen } from '@testing-library/react';
import { Chart } from './Chart';

describe('Chart', () => {
  it('renders children correctly', () => {
    render(<Chart>Test Content</Chart>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
