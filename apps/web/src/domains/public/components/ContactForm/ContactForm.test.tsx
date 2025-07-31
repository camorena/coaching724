import { render, screen } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('renders children correctly', () => {
    render(<ContactForm>Test Content</ContactForm>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
