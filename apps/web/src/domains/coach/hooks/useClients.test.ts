import { renderHook, act } from '@testing-library/react-hooks';
import { useClients } from './useClients';

describe('useClients', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useClients());
    expect(result.current.state).toBeNull();
  });
});
