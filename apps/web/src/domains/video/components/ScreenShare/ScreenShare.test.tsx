import { render, screen } from '@testing-library/react';
import { ScreenShare } from './ScreenShare';

describe('ScreenShare', () => {
  it('renders children correctly', () => {
    render(<ScreenShare>Test Content</ScreenShare>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
