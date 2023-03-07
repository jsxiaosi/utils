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

describe('is', () => {
  test('is', () => {
    expect(is(new Date(), 'Date')).toBeTruthy();
  });

  test('isDef', () => {
    const value = 'admin';
    expect(isDef(value)).toBeTruthy();
  });

  test('isUnDef', () => {
    let value;
    expect(isUnDef(value)).toBeTruthy();
  });

  test('isUnDef', () => {
    let value;
    expect(isUnDef(value)).toBeTruthy();
  });

  test('isObject', () => {
    const obj = {};
    expect(isObject(obj)).toBeTruthy();
    const str = '';
    expect(isObject(str)).toBeFalsy();
  });

  test('isEmpty', () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty(new Map())).toBeTruthy();
    expect(isEmpty([1, 2])).toBeFalsy();
    expect(isEmpty({ name: 'test' })).toBeFalsy();
    expect(isEmpty(new Date())).toBeFalsy();
  });

  test('isDate', () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate('')).toBeFalsy();
  });

  test('isNull', () => {
    expect(isNull(new Date())).toBeFalsy();
    expect(isNull(null)).toBeTruthy();
  });

  test('isNullOrUnDef', () => {
    let val;
    expect(isNullOrUnDef(val)).toBeTruthy();
    expect(isNullOrUnDef(null)).toBeTruthy();
  });

  test('isNumber', () => {
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber('')).toBeFalsy();
  });

  test('isPromise', () => {
    const promise = Promise.resolve('test');
    expect(isPromise(promise)).toBeTruthy();
    expect(
      isPromise({
        then: () => {},
        catch: () => {},
      }),
    ).toBeTruthy();
    expect(isPromise('')).toBeFalsy();
  });

  test('isString', () => {
    expect(isString('')).toBeTruthy();
    expect(isString(() => {})).toBeFalsy();
  });

  test('isFunction', () => {
    expect(isFunction('')).toBeFalsy();
    expect(isFunction(() => {})).toBeTruthy();
  });

  test('isBoolean', () => {
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean(true)).toBeTruthy();
  });

  test('isRegExp', () => {
    expect(isRegExp(/123/)).toBeTruthy();
    expect(isRegExp(123123)).toBeFalsy();
  });

  test('isArray', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray(123123)).toBeFalsy();
  });

  it('isWindow', () => {
    expect(isWindow(window)).toBeFalsy();
  });

  it('isMap', () => {
    expect(isMap(new Map())).toBeTruthy();
    expect(isMap([])).toBeFalsy();
  });

  it('isElement', () => {
    expect(isElement({})).toBeFalsy();
    expect(isElement({ tagName: 'DIV' })).toBeTruthy();
  });

  test('isUrl', () => {
    expect(isUrl('https://xs-vue-utils.vercel.app/')).toBeTruthy();
    expect(isUrl('123123')).toBeFalsy();
  });
});
