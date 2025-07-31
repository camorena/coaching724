import { render, screen } from '@testing-library/react';
import { CoachProfile } from './CoachProfile';

describe('CoachProfile', () => {
  it('renders children correctly', () => {
    render(<CoachProfile>Test Content</CoachProfile>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
