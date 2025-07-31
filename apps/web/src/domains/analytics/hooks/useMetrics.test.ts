import { renderHook, act } from '@testing-library/react-hooks';
import { useMetrics } from './useMetrics';

describe('useMetrics', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useMetrics());
    expect(result.current.state).toBeNull();
  });
});
