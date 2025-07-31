import { render, screen } from '@testing-library/react';
import { Availability } from './Availability';

describe('Availability', () => {
  it('renders children correctly', () => {
    render(<Availability>Test Content</Availability>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
