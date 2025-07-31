import { render, screen } from '@testing-library/react';
import { AppointmentForm } from './AppointmentForm';

describe('AppointmentForm', () => {
  it('renders children correctly', () => {
    render(<AppointmentForm>Test Content</AppointmentForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
