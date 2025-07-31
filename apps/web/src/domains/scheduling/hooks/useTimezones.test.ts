import { renderHook, act } from '@testing-library/react-hooks';
import { useTimezones } from './useTimezones';

describe('useTimezones', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useTimezones());
    expect(result.current.state).toBeNull();
  });
});
