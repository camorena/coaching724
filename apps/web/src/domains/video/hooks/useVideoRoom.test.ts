import { renderHook, act } from '@testing-library/react-hooks';
import { useVideoRoom } from './useVideoRoom';

describe('useVideoRoom', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useVideoRoom());
    expect(result.current.state).toBeNull();
  });
});
