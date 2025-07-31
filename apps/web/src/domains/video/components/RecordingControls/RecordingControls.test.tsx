import { render, screen } from '@testing-library/react';
import { RecordingControls } from './RecordingControls';

describe('RecordingControls', () => {
  it('renders children correctly', () => {
    render(<RecordingControls>Test Content</RecordingControls>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
