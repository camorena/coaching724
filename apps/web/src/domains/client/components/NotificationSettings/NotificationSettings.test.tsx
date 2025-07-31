import { render, screen } from '@testing-library/react';
import { NotificationSettings } from './NotificationSettings';

describe('NotificationSettings', () => {
  it('renders children correctly', () => {
    render(<NotificationSettings>Test Content</NotificationSettings>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
