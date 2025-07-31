import { renderHook, act } from '@testing-library/react-hooks';
import { useServices } from './useServices';

describe('useServices', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useServices());
    expect(result.current.state).toBeNull();
  });
});
