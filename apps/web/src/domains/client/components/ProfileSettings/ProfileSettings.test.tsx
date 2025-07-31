import { render, screen } from '@testing-library/react';
import { ProfileSettings } from './ProfileSettings';

describe('ProfileSettings', () => {
  it('renders children correctly', () => {
    render(<ProfileSettings>Test Content</ProfileSettings>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
