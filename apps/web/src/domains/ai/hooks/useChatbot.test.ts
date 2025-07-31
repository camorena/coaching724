import { renderHook, act } from '@testing-library/react-hooks';
import { useChatbot } from './useChatbot';

describe('useChatbot', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useChatbot());
    expect(result.current.state).toBeNull();
  });
});
