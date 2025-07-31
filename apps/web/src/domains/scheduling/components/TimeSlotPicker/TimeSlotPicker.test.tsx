import { render, screen } from '@testing-library/react';
import { TimeSlotPicker } from './TimeSlotPicker';

describe('TimeSlotPicker', () => {
  it('renders children correctly', () => {
    render(<TimeSlotPicker>Test Content</TimeSlotPicker>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
