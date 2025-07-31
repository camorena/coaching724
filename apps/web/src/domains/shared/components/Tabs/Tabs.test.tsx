import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('renders children correctly', () => {
    render(<Tabs>Test Content</Tabs>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
