import { render, screen } from '@testing-library/react';
import { ClientDashboard } from './ClientDashboard';

describe('ClientDashboard', () => {
  it('renders children correctly', () => {
    render(<ClientDashboard>Test Content</ClientDashboard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
