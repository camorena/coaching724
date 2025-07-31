import { render, screen } from '@testing-library/react';
import { AgentSelector } from './AgentSelector';

describe('AgentSelector', () => {
  it('renders children correctly', () => {
    render(<AgentSelector>Test Content</AgentSelector>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
