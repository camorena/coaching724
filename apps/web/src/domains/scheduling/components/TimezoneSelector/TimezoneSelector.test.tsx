import { render, screen } from '@testing-library/react';
import { TimezoneSelector } from './TimezoneSelector';

describe('TimezoneSelector', () => {
  it('renders children correctly', () => {
    render(<TimezoneSelector>Test Content</TimezoneSelector>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
