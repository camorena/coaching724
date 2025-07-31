import { render, screen } from '@testing-library/react';
import { ConversionFunnel } from './ConversionFunnel';

describe('ConversionFunnel', () => {
  it('renders children correctly', () => {
    render(<ConversionFunnel>Test Content</ConversionFunnel>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
