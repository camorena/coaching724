import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useDebounce());
    expect(result.current.state).toBeNull();
  });
});
