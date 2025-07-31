import { renderHook, act } from '@testing-library/react-hooks';
import { usePaymentMethod } from './usePaymentMethod';

describe('usePaymentMethod', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => usePaymentMethod());
    expect(result.current.state).toBeNull();
  });
});
