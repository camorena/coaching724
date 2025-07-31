import { render, screen } from '@testing-library/react';
import { ForgotPasswordForm } from './ForgotPasswordForm';

describe('ForgotPasswordForm', () => {
  it('renders children correctly', () => {
    render(<ForgotPasswordForm>Test Content</ForgotPasswordForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
