import { renderHook, act } from '@testing-library/react-hooks';
import { useCalendar } from './useCalendar';

describe('useCalendar', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useCalendar());
    expect(result.current.state).toBeNull();
  });
});
