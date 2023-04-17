type GenericFunction = (...args: any[]) => any;

type ModifyReturn<T extends GenericFunction> = (...args: Parameters<T>) => void;

type Callback<T extends GenericFunction> = (result: ReturnType<T> extends Promise<infer R> ? R : ReturnType<T>) => void;

export function debounce<T extends GenericFunction>(
  func: T,
  wait: number,
  immediate = false,
  callback?: Callback<T>,
): ModifyReturn<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return async function (...args: Parameters<T>) {
    const callNow = immediate && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(async () => {
      timeoutId = null;
      if (!immediate) {
        const returnValue = await func(...args);
        callback && callback(returnValue);
      }
    }, wait);

    if (callNow) {
      const returnValue = await func(...args);
      callback && callback(returnValue);
    }
  } as T;
}

export function throttle<T extends GenericFunction>(func: T, wait: number, callback?: Callback<T>): ModifyReturn<T> {
  let lastCallTime: number | null = null;

  return (async (...args: Parameters<T>) => {
    const now = Date.now();
    if (!lastCallTime || now - lastCallTime >= wait) {
      lastCallTime = now;
      const returnValue = await func(...args);
      callback && callback(returnValue);
    }
  }) as T;
}
