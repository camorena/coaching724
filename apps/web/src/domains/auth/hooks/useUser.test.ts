import { renderHook, act } from '@testing-library/react-hooks';
import { useUser } from './useUser';

describe('useUser', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useUser());
    expect(result.current.state).toBeNull();
  });
});
