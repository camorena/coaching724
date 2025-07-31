import { render, screen } from '@testing-library/react';
import { CoachManagement } from './CoachManagement';

describe('CoachManagement', () => {
  it('renders children correctly', () => {
    render(<CoachManagement>Test Content</CoachManagement>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
