import { test, describe, expect } from 'vitest';
import { appendUrlParams, objectToUrlParams, urlParamsToObject } from '..';

describe('url', () => {
  const params = {
    key1: 'value1',
    key2: ['value2a', 'value2b'],
  };

  describe('objectToUrlParams', () => {
    test('converts object to query string with unnamed array format', () => {
      const queryString = objectToUrlParams(params);
      expect(queryString).toBe('key1=value1&[]=value2a&[]=value2b');
    });

    test('converts object to query string with brackets array format', () => {
      const queryString = objectToUrlParams(params, 'brackets');
      expect(queryString).toBe('key1=value1&key2[]=value2a&key2[]=value2b');
    });

    test('converts object to query string with indices array format', () => {
      const queryString = objectToUrlParams(params, 'indices');
      expect(queryString).toBe('key1=value1&key2[0]=value2a&key2[1]=value2b');
    });

    test('converts object to query string with repeat array format', () => {
      const queryString = objectToUrlParams(params, 'repeat');
      expect(queryString).toBe('key1=value1&key2=value2a&key2=value2b');
    });

    test('converts object to query string with comma array format', () => {
      const queryString = objectToUrlParams(params, 'comma');
      expect(queryString).toBe('key1=value1&key2=value2a,value2b');
    });

    test('Convert an array to a query string in the default unnamed array format', () => {
      const queryString = objectToUrlParams(params.key2);
      expect(queryString).toBe('[]=value2a&[]=value2b');
    });
  });

  describe('appendUrlParams', () => {
    test('Add parameters to the URL', () => {
      const queryString = appendUrlParams('https://github.com/jsxiaosi', params);
      expect(queryString).toBe('https://github.com/jsxiaosi?key1=value1&[]=value2a&[]=value2b');
    });
    test('Append parameters to the specified URL', () => {
      const queryString = appendUrlParams('https://github.com/jsxiaosi?existingKey=existingValue', params);
      expect(queryString).toBe(
        'https://github.com/jsxiaosi?existingKey=existingValue&key1=value1&[]=value2a&[]=value2b',
      );
    });
  });

  describe('urlParamsToObject', () => {
    test('parse key-value pairs', () => {
      const result = urlParamsToObject('key1=value1&key2=value2');
      expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    test('parse unnamed array', () => {
      const result = urlParamsToObject('[]=a&[]=b&[]=c');
      expect(result).toEqual(['a', 'b', 'c']);
    });

    test('parse named arrays with brackets', () => {
      const result = urlParamsToObject('array[]=a&array[]=b&array[]=c');
      expect(result).toEqual({ array: ['a', 'b', 'c'] });
    });

    test('parse named arrays with indices', () => {
      const result = urlParamsToObject('array[0]=a&array[1]=b&array[2]=c');
      expect(result).toEqual({ array: ['a', 'b', 'c'] });
    });

    test('parsing repeat named arrays', () => {
      const result = urlParamsToObject('array=a&array=b&array=c');
      expect(result).toEqual({ array: ['a', 'b', 'c'] });
    });

    test('parse unnamed array with mixed named parameters', () => {
      const result = urlParamsToObject('[]=a&[]=b&key=value&[]=c');
      expect(result).toEqual({ $unnamedArray: ['a', 'b', 'c'], key: 'value' });
    });

    test('parse full URL', () => {
      const result = urlParamsToObject('https://example.com?key1=value1&key2=value2');
      expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    test('return an empty object when provided an empty string', () => {
      const result = urlParamsToObject('');
      expect(result).toEqual({});
    });
  });
});
