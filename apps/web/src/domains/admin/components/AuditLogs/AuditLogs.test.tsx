import { render, screen } from '@testing-library/react';
import { AuditLogs } from './AuditLogs';

describe('AuditLogs', () => {
  it('renders children correctly', () => {
    render(<AuditLogs>Test Content</AuditLogs>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
