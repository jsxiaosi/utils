import { deepEqual } from '../../function/deepEqual';

type NestedKeys<T> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown> ? `${K}.${NestedKeys<T[K]>}` | K : K;
}[keyof T & string];

export function getObjectNestedValue<T extends Record<string, any>>(obj: T, keyPath: NestedKeys<T>): any {
  const keys = keyPath.split('.');
  let currentObj = obj;

  for (const key of keys) {
    if (typeof currentObj !== 'object' || currentObj === null) {
      return undefined;
    }
    currentObj = currentObj[key];
  }

  return currentObj;
}

export function byPathEqualObjectValues<T extends Record<string, unknown>>(
  obj1: T,
  obj2: T,
  keyPath: NestedKeys<T>,
): boolean {
  const value1 = getObjectNestedValue<T>(obj1, keyPath);
  const value2 = getObjectNestedValue<T>(obj2, keyPath);
  return JSON.stringify(value1) === JSON.stringify(value2);
}

export function deepEqualObject<T = any>(obj1: T, obj2: T) {
  return deepEqual(obj1, obj2);
}
