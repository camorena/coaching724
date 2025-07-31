import { renderHook, act } from '@testing-library/react-hooks';
import { useSubscription } from './useSubscription';

describe('useSubscription', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useSubscription());
    expect(result.current.state).toBeNull();
  });
});
