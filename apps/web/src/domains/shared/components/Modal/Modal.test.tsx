import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders children correctly', () => {
    render(<Modal>Test Content</Modal>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
