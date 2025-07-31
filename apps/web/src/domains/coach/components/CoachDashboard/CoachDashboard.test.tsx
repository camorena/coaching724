import { render, screen } from '@testing-library/react';
import { CoachDashboard } from './CoachDashboard';

describe('CoachDashboard', () => {
  it('renders children correctly', () => {
    render(<CoachDashboard>Test Content</CoachDashboard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
