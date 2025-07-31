import { renderHook, act } from '@testing-library/react-hooks';
import { useIntake } from './useIntake';

describe('useIntake', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useIntake());
    expect(result.current.state).toBeNull();
  });
});
