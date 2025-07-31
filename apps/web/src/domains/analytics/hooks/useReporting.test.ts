import { renderHook, act } from '@testing-library/react-hooks';
import { useReporting } from './useReporting';

describe('useReporting', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useReporting());
    expect(result.current.state).toBeNull();
  });
});
