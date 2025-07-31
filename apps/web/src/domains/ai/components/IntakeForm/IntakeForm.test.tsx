import { render, screen } from '@testing-library/react';
import { IntakeForm } from './IntakeForm';

describe('IntakeForm', () => {
  it('renders children correctly', () => {
    render(<IntakeForm>Test Content</IntakeForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
