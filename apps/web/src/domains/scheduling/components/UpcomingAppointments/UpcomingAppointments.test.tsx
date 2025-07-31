import { render, screen } from '@testing-library/react';
import { UpcomingAppointments } from './UpcomingAppointments';

describe('UpcomingAppointments', () => {
  it('renders children correctly', () => {
    render(<UpcomingAppointments>Test Content</UpcomingAppointments>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
