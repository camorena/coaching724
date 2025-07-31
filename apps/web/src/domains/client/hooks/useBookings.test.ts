import { renderHook, act } from '@testing-library/react-hooks';
import { useBookings } from './useBookings';

describe('useBookings', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useBookings());
    expect(result.current.state).toBeNull();
  });
});
