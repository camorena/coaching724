import { renderHook, act } from '@testing-library/react-hooks';
import { usePrevious } from './usePrevious';

describe('usePrevious', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => usePrevious());
    expect(result.current.state).toBeNull();
  });
});
