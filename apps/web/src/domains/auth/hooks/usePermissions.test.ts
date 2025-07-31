import { renderHook, act } from '@testing-library/react-hooks';
import { usePermissions } from './usePermissions';

describe('usePermissions', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => usePermissions());
    expect(result.current.state).toBeNull();
  });
});
