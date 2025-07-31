import { render, screen } from '@testing-library/react';
import { UserManagement } from './UserManagement';

describe('UserManagement', () => {
  it('renders children correctly', () => {
    render(<UserManagement>Test Content</UserManagement>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
