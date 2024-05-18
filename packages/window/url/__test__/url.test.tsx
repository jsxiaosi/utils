import { test, describe, expect } from 'vitest';
import { appendUrlParams, objectToUrlParams, urlParamsToObject } from '..';

describe('url', () => {
  const baseUrl = 'https://github.com/jsxiaosi';
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
      const queryString = appendUrlParams(`${baseUrl}`, params);
      expect(queryString).toBe(`${baseUrl}?key1=value1&[]=value2a&[]=value2b`);
    });
    test('Append parameters to the specified URL', () => {
      const queryString = appendUrlParams(`${baseUrl}?existingKey=existingValue`, params);
      expect(queryString).toBe(`${baseUrl}?existingKey=existingValue&key1=value1&[]=value2a&[]=value2b`);
    });
  });

  describe('urlParamsToObject', () => {
    test('parse key-value pairs', () => {
      const result = urlParamsToObject(`${baseUrl}?key1=value1&key2=value2`);
      expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    test('parse unnamed array', () => {
      const result = urlParamsToObject(`${baseUrl}?[]=a&[]=b&[]=c`);
      expect(result).toEqual(['a', 'b', 'c']);
    });

    test('parse named arrays with brackets', () => {
      const result = urlParamsToObject(`${baseUrl}?array[]=a&array[]=b&array[]=c`);
      expect(result).toEqual({ array: ['a', 'b', 'c'] });
    });

    test('parse named arrays with indices', () => {
      const result = urlParamsToObject(`${baseUrl}?array[0]=a&array[1]=b&array[2]=c`);
      expect(result).toEqual({ array: ['a', 'b', 'c'] });
    });

    test('parsing repeat named arrays', () => {
      const result = urlParamsToObject(`${baseUrl}?array=a&array=b&array=c`);
      expect(result).toEqual({ array: ['a', 'b', 'c'] });
    });

    test('parse unnamed array with mixed named parameters', () => {
      const result = urlParamsToObject(`${baseUrl}?[]=a&[]=b&key=value&[]=c`);
      expect(result).toEqual({ $unnamedArray: ['a', 'b', 'c'], key: 'value' });
    });

    test('parse full URL', () => {
      const result = urlParamsToObject(`${baseUrl}?key1=value1&key2=value2`);
      expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    test('return an empty object when provided an empty string', () => {
      const result = urlParamsToObject('');
      expect(result).toEqual({});
    });

    test('parse URL parameters with another URL', () => {
      const result = urlParamsToObject(`${baseUrl}?url=https://example.com`);
      expect(result).toEqual({ url: 'https://example.com' });
    });
  });
});
