import { renderHook, act } from '@testing-library/react-hooks';
import { useAnalytics } from './useAnalytics';

describe('useAnalytics', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useAnalytics());
    expect(result.current.state).toBeNull();
  });
});
