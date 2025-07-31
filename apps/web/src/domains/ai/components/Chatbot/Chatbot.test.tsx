import { render, screen } from '@testing-library/react';
import { Chatbot } from './Chatbot';

describe('Chatbot', () => {
  it('renders children correctly', () => {
    render(<Chatbot>Test Content</Chatbot>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
