import { test, describe, expect } from 'vitest';

import { deepEqualObject, byPathEqualObjectValues, getObjectNestedValue } from '..';

describe('deepEqualObject', () => {
  test('should return true for identical objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqualObject(obj1, obj2)).toBe(true);
  });

  test('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(deepEqualObject(obj1, obj2)).toBe(false);
  });
});

describe('byPathEqualObjectValues', () => {
  test('should return true for identical values in given keyPath', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2, d: 3 } };
    expect(byPathEqualObjectValues(obj1, obj2, 'a')).toBe(true);
    expect(byPathEqualObjectValues(obj1, obj2, 'b.c')).toBe(true);
  });

  test('should return false for different values in given keyPath', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(byPathEqualObjectValues(obj1, obj2, 'b.c')).toBe(false);
  });
});

describe('getObjectNestedValue', () => {
  test('should return the value for a given keyPath', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(getObjectNestedValue(obj, 'a')).toBe(1);
    expect(getObjectNestedValue(obj, 'b.c')).toBe(2);
  });

  test('should return undefined for an invalid keyPath', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(getObjectNestedValue(obj, 'a.x' as any)).toBeUndefined();
    expect(getObjectNestedValue(obj, 'b.c.x' as any)).toBeUndefined();
  });
});
