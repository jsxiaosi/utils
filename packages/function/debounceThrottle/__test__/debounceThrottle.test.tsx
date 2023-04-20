import { describe, expect, it, vitest } from 'vitest';
import { debounce, throttle } from '..';

describe('debounce', () => {
  it('should debounce a function call', async () => {
    const mockFn = vitest.fn();
    const debounced = debounce(mockFn, 100);
    debounced();
    debounced();
    expect(mockFn).not.toBeCalled();
    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should call the function immediately if immediate flag is set', async () => {
    const mockFn = vitest.fn();
    const debounced = debounce(mockFn, 100, true);
    debounced();
    debounced();
    expect(mockFn).toBeCalledTimes(1);
    await new Promise((resolve) => setTimeout(resolve, 150));
    debounced();
    expect(mockFn).toBeCalledTimes(2);
  });

  it('If a callback is set, the callback should be fired', async () => {
    const mockFn = vitest.fn();
    const debounced = debounce(mockFn, 100, false, (_res) => {});
    debounced();
    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('If a callback is set and immediate is set, the callback should fire immediately', async () => {
    const mockFn = vitest.fn();
    const debounced = debounce(mockFn, 100, true, (_res) => {});
    debounced();
    expect(mockFn).toBeCalledTimes(1);
  });
});

describe('throttle', () => {
  it('should throttle a function call', async () => {
    const mockFn = vitest.fn();
    const throttled = throttle(mockFn, 100);
    throttled();
    throttled();
    expect(mockFn).toBeCalledTimes(1);
    await new Promise((resolve) => setTimeout(resolve, 150));
    throttled();
    expect(mockFn).toBeCalledTimes(2);
  });

  it('Throttling callback should fire if set', async () => {
    const mockFn = vitest.fn();
    const throttled = throttle(mockFn, 100, (_res) => {});
    throttled();
    throttled();
    expect(mockFn).toBeCalledTimes(1);
  });
});
