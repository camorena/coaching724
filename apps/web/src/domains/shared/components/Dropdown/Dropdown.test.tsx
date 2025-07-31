import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders children correctly', () => {
    render(<Dropdown>Test Content</Dropdown>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
