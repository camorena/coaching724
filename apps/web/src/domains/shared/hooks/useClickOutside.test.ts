import { renderHook, act } from '@testing-library/react-hooks';
import { useClickOutside } from './useClickOutside';

describe('useClickOutside', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useClickOutside());
    expect(result.current.state).toBeNull();
  });
});
