import { render, screen } from '@testing-library/react';
import { OAuthButtons } from './OAuthButtons';

describe('OAuthButtons', () => {
  it('renders children correctly', () => {
    render(<OAuthButtons>Test Content</OAuthButtons>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
