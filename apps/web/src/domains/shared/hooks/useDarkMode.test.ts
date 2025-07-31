import { renderHook, act } from '@testing-library/react-hooks';
import { useDarkMode } from './useDarkMode';

describe('useDarkMode', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.state).toBeNull();
  });
});
