import { test, describe, expect, vi, it } from 'vitest';
import {
  is,
  isDef,
  isUnDef,
  isObject,
  isEmpty,
  isDate,
  isNull,
  isNullOrUnDef,
  isNumber,
  isPromise,
  isString,
  isFunction,
  isBoolean,
  isRegExp,
  isArray,
  isUrl,
  isWindow,
  isMap,
  isElement,
} from '..';

const window = {};

vi.stubGlobal('window', {});

function pmFn() {
  return new Promise((resolver) => resolver(123));
}

describe('is', () => {
  test('is', () => {
    expect(is(new Date(), 'Date')).toBe(true);
  });

  test('isDef', () => {
    const value = 'admin';
    expect(isDef(value)).toBe(true);
  });

  test('isUnDef', () => {
    let value;
    expect(isUnDef(value)).toBe(true);
  });

  test('isUnDef', () => {
    let value;
    expect(isUnDef(value)).toBe(true);
  });

  test('isObject', () => {
    const obj = {};
    expect(isObject(obj)).toBe(true);
    const str = '';
    expect(isObject(str)).toBe(false);
  });

  test('isEmpty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty({ name: 'test' })).toBe(false);
    expect(isEmpty(new Date())).toBe(false);
  });

  test('isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate('')).toBe(false);
  });

  test('isNull', () => {
    expect(isNull(new Date())).toBe(false);
    expect(isNull(null)).toBe(true);
  });

  test('isNullOrUnDef', () => {
    let val;
    expect(isNullOrUnDef(val)).toBe(true);
    expect(isNullOrUnDef(null)).toBe(true);
  });

  test('isNumber', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber('')).toBe(false);
  });

  test('isPromise', () => {
    expect(isPromise(pmFn())).toBe(true);
    expect(isPromise('')).toBe(false);
  });

  test('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString(pmFn())).toBe(false);
  });

  test('isFunction', () => {
    expect(isFunction('')).toBe(false);
    expect(isFunction(pmFn)).toBe(true);
  });

  test('isBoolean', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(true)).toBe(true);
  });

  test('isRegExp', () => {
    expect(isRegExp(/123/)).toBe(true);
    expect(isRegExp(123123)).toBe(false);
  });

  test('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray(123123)).toBe(false);
  });

  it('isWindow', () => {
    expect(isWindow(window)).toBe(false);
  });

  it('isMap', () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap([])).toBe(false);
  });

  it('isElement', () => {
    expect(isElement({})).toBe(false);
    expect(isElement({ tagName: 'DIV' })).toBe(true);
  });

  test('isUrl', () => {
    expect(isUrl('https://xs-utils.vercel.app/')).toBe(true);
    expect(isUrl('123123')).toBe(false);
  });
});
