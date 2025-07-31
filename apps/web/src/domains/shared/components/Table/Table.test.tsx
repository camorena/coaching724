import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  it('renders children correctly', () => {
    render(<Table>Test Content</Table>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
