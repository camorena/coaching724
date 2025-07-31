import { render, screen } from '@testing-library/react';
import { ClientList } from './ClientList';

describe('ClientList', () => {
  it('renders children correctly', () => {
    render(<ClientList>Test Content</ClientList>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
