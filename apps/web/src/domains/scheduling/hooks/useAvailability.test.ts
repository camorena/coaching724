import { renderHook, act } from '@testing-library/react-hooks';
import { useAvailability } from './useAvailability';

describe('useAvailability', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useAvailability());
    expect(result.current.state).toBeNull();
  });
});
