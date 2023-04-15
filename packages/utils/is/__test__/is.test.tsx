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
  isEmail,
  isPhone,
  isMobile,
  isWeiXin,
  isQQBrowser,
  isIdCard,
  isImage,
  isWord,
  isExcel,
  isPowerPoint,
  isObjectHasValue,
} from '..';

vi.mock('./__mocks__/navigator', () => {
  return {
    userAgent: 'test user agent',
  };
});

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

  test('isObject', () => {
    const obj = {};
    expect(isObjectHasValue(obj)).toBeFalsy();
    const objValue = { name: 'xs' };
    expect(isObjectHasValue(objValue)).toBeTruthy();
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
    expect(isElement('tag')).toBeFalsy();
    expect(isElement({})).toBeFalsy();
    const el = document.createElement('div');
    expect(isElement(el)).toBeTruthy();
  });

  test('isUrl', () => {
    expect(isUrl('https://jsxiaosi/utils.vercel.app/')).toBeTruthy();
    expect(isUrl('123123')).toBeFalsy();
  });

  test('isEmail', () => {
    expect(isEmail('1531733886@qq.com')).toBeTruthy();
    expect(isEmail('153173388611.com')).toBeFalsy();
  });

  test('isMobile', () => {
    expect(isMobile('13000000000')).toBeTruthy();
    expect(isMobile('130000000')).toBeFalsy();
  });

  test('isPhone', () => {
    expect(isPhone('020-12345678')).toBeTruthy();
    expect(isPhone('12345678')).toBeTruthy();
    expect(isPhone('020-1234-5678')).toBeFalsy();
  });

  test('isWeiXin', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001528) NetType/WIFI Language/zh_CN',
    );
    expect(isWeiXin()).toBeTruthy();

    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.9999.99 Safari/537.36',
    );
    expect(isWeiXin()).toBeFalsy();
  });

  test('isQQBrowser', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Linux; Android 11; ELS-AN00 Build/HUAWEIELS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.105 Mobile Safari/537.36 MQQBrowser/12.0.2.1320',
    );
    expect(isQQBrowser()).toBeTruthy();

    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Linux; Android 11; ELS-AN00 Build/HUAWEIELS-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36',
    );
    expect(isQQBrowser()).toBeFalsy();
  });

  test('isIdCard', () => {
    expect(isIdCard('12345678901234')).toEqual({ code: 1001, result: false });

    expect(isIdCard('001111190001014537')).toEqual({ code: 2001, result: false });

    expect(isIdCard('111111190031014537')).toEqual({ code: 3001, result: false });

    expect(isIdCard('111111190001014538')).toEqual({ code: 4001, result: false });

    expect(isIdCard('111111190001014537')).toEqual({ code: 0, result: true });
  });

  test('isImage', () => {
    expect(isImage('test.png')).toBeTruthy();
  });

  test('isWord', () => {
    expect(isWord('test.docx')).toBeTruthy();
  });

  test('isExcel', () => {
    expect(isExcel('test.xlsx')).toBeTruthy();
  });

  test('isPowerPoint', () => {
    expect(isPowerPoint('test.pptx')).toBeTruthy();
  });
});
