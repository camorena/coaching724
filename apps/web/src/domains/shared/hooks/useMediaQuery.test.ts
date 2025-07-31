import { renderHook, act } from '@testing-library/react-hooks';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useMediaQuery());
    expect(result.current.state).toBeNull();
  });
});
