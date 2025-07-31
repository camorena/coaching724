import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from './useAuth';

describe('useAuth', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.state).toBeNull();
  });
});
