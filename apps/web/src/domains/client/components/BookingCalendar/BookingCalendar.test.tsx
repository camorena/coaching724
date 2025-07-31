import { render, screen } from '@testing-library/react';
import { BookingCalendar } from './BookingCalendar';

describe('BookingCalendar', () => {
  it('renders children correctly', () => {
    render(<BookingCalendar>Test Content</BookingCalendar>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
