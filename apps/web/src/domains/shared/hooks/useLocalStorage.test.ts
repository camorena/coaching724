import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useLocalStorage());
    expect(result.current.state).toBeNull();
  });
});
