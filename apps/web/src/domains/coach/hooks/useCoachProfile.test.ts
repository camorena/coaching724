import { renderHook, act } from '@testing-library/react-hooks';
import { useCoachProfile } from './useCoachProfile';

describe('useCoachProfile', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useCoachProfile());
    expect(result.current.state).toBeNull();
  });
});
