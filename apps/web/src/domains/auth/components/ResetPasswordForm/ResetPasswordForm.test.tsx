import { render, screen } from '@testing-library/react';
import { ResetPasswordForm } from './ResetPasswordForm';

describe('ResetPasswordForm', () => {
  it('renders children correctly', () => {
    render(<ResetPasswordForm>Test Content</ResetPasswordForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
