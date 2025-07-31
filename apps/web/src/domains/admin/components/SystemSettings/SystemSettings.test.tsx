import { render, screen } from '@testing-library/react';
import { SystemSettings } from './SystemSettings';

describe('SystemSettings', () => {
  it('renders children correctly', () => {
    render(<SystemSettings>Test Content</SystemSettings>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
