import { renderHook, act } from '@testing-library/react-hooks';
import { useMediaDevices } from './useMediaDevices';

describe('useMediaDevices', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useMediaDevices());
    expect(result.current.state).toBeNull();
  });
});
