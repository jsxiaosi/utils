import { test, describe, expect } from 'vitest';

import { compareValues, compareObjects, compareArrays, deepEqual } from '..';

describe('compareValues', () => {
  test('should return correct result for different types of values', () => {
    expect(compareValues(1, 2)).toBe(-1);
    expect(compareValues(2, 1)).toBe(1);
    expect(compareValues(1, 1)).toBe(0);
    expect(compareValues('a', 'b')).toBe(-1);
    expect(compareValues('b', 'a')).toBe(1);
    expect(compareValues('a', 'a')).toBe(0);
    expect(compareValues({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(0);
    expect(compareValues([1, 2, 3], [3, 2, 1])).toBe(0);
  });
});

describe('compareObjects', () => {
  test('should return correct result for different objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    const obj3 = { a: 1, b: 2, c: 3 };
    expect(compareObjects(obj1, obj1)).toBe(0);
    expect(compareObjects(obj1, obj2)).toBe(-1);
    expect(compareObjects(obj1, obj3)).toBe(-1);
    expect(compareObjects({ a: 1, b: 3 }, { a: 1, c: 3 })).toBe(-1);
  });
});

describe('compareArrays', () => {
  test('should return correct result for different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    const arr3 = [1, 2, 3, 4];
    expect(compareArrays(arr1, arr1)).toBe(0);
    expect(compareArrays(arr1, arr2)).toBe(-1);
    expect(compareArrays(arr1, arr3)).toBe(-1);
  });
});

describe('deepEqual', () => {
  test('should return true for equal values and false for unequal values', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    const obj3 = { a: 1, b: { c: 3 } };
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const arr3 = [1, 2, 4];

    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual(1, '1')).toBe(false);
    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(false);
    expect(deepEqual(arr1, arr2)).toBe(true);
    expect(deepEqual(arr1, arr3)).toBe(false);
  });

  test('should handle circular references correctly', () => {
    const obj1: any = { a: 1 };
    const obj2: any = { a: 1 };
    obj1.b = obj1;
    obj2.b = obj2;
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for objects with different keys length', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2, c: 3 };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for arrays with different length', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    expect(deepEqual(arr1, arr2)).toBe(false);
  });

  test('should handle object and array elements in arrays', () => {
    const arr1 = [{ a: 1 }, [1, 2]];
    const arr2 = [{ a: 1 }, [1, 2]];
    expect(deepEqual(arr1, arr2)).toBe(true);
  });

  test('should handle date and regex types', () => {
    const date1 = new Date(2022, 1, 1);
    const date2 = new Date(2022, 1, 1);
    const regex1 = /test/;
    const regex2 = /test/;
    expect(deepEqual(date1, date2)).toBe(true);
    expect(deepEqual(regex1, regex2)).toBe(true);
  });

  test('should handle function types', () => {
    const fn1 = function () {};
    const fn2 = function () {};
    console.log(typeof fn2);
    expect(deepEqual(fn1, fn2)).toBe(true);
  });

  test('should handle nested objects and arrays', () => {
    const obj1 = {
      a: [
        { id: 1, value: 'first' },
        { id: 2, value: 'second' },
      ],
    };

    const obj2 = {
      a: [
        { id: 2, value: 'second' },
        { id: 1, value: 'first' },
      ],
    };

    const obj3 = {
      a: [
        { id: 1, value: 'first' },
        { id: 2, value: 'third' },
      ],
    };

    const obj4 = {
      a: [
        { id: 1, value: 'first' },
        { id: 2, value: 'second' },
        { id: 3, value: 'third' },
      ],
    };

    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(false);
    expect(deepEqual(obj1, obj4)).toBe(false);
  });

  test('should handle nested arrays', () => {
    const arr1 = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    const arr2 = [
      [4, 5, 6],
      [1, 2, 3],
    ];

    const arr3 = [
      [1, 2, 3],
      [4, 5, 7],
    ];

    const arr4 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(deepEqual(arr1, arr2)).toBe(true);
    expect(deepEqual(arr1, arr3)).toBe(false);
    expect(deepEqual(arr1, arr4)).toBe(false);
  });
});
