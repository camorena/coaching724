import { render, screen } from '@testing-library/react';
import { SessionHistory } from './SessionHistory';

describe('SessionHistory', () => {
  it('renders children correctly', () => {
    render(<SessionHistory>Test Content</SessionHistory>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
