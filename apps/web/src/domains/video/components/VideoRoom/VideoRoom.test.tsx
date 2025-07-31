import { render, screen } from '@testing-library/react';
import { VideoRoom } from './VideoRoom';

describe('VideoRoom', () => {
  it('renders children correctly', () => {
    render(<VideoRoom>Test Content</VideoRoom>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
