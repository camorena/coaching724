import { renderHook, act } from '@testing-library/react-hooks';
import { useAgents } from './useAgents';

describe('useAgents', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useAgents());
    expect(result.current.state).toBeNull();
  });
});
