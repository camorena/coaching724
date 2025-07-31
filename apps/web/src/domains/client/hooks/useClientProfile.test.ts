import { renderHook, act } from '@testing-library/react-hooks';
import { useClientProfile } from './useClientProfile';

describe('useClientProfile', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useClientProfile());
    expect(result.current.state).toBeNull();
  });
});
