import { render, screen } from '@testing-library/react';
import { AdminDashboard } from './AdminDashboard';

describe('AdminDashboard', () => {
  it('renders children correctly', () => {
    render(<AdminDashboard>Test Content</AdminDashboard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
