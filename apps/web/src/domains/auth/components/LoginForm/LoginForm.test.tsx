import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders children correctly', () => {
    render(<LoginForm>Test Content</LoginForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
