import { render, screen } from '@testing-library/react';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
  it('renders children correctly', () => {
    render(<RegisterForm>Test Content</RegisterForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
