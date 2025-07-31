import { renderHook, act } from '@testing-library/react-hooks';
import { useCheckout } from './useCheckout';

describe('useCheckout', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useCheckout());
    expect(result.current.state).toBeNull();
  });
});
