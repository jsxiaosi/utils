import { test, describe, expect, it, vi } from 'vitest';
import { _storage as storage } from '..';

const KEY = 'utils';

const Name = 'test-storage';

describe('storage', () => {
  it('storage', () => {
    expect(storage).toBeDefined();
  });

  it('setStorageConfig', () => {
    storage.setStorageConfig({ prefix: KEY, isEncrypt: true });
    expect(storage.config).toEqual({
      prefix: KEY,
      expire: 0,
      isEncrypt: true,
      secret_key: '3333e6e143439161',
      secret_iv: 'e3bbe7e3ba84431a',
    });
  });

  it('isSupportStorage', () => {
    expect(storage.isSupportStorage()).toBeTruthy();
  });

  test('set and get storage value', () => {
    const value = { name: 'test' };
    storage.setStorage(Name, value);
    expect(storage.getStorage(Name)).toEqual(value);
  });

  test('set empty data', () => {
    expect(() => storage.setStorage('xs', null, NaN)).toThrow(new Error('Expire 必须是数字'));
    storage.setStorageConfig({ isEncrypt: false, expire: 1 });
    expect(storage.setStorage('xs', null, 0)).toBeUndefined();
    storage.removeStorage('xs');
    storage.setStorageConfig({ isEncrypt: false, expire: 0 });
  });

  test('set empty data', () => {
    storage.setStorageConfig({ isEncrypt: true });
    expect(storage.getStorage('xs')).toBeNull();
    storage.setStorageConfig({ isEncrypt: false });
  });

  test('get empty data', () => {
    expect(storage.getStorage(Name + KEY)).toBeNull();
    expect(storage.getStorage(Name)).toBeNull();
  });

  test('set and get storage value with expired', () => {
    const value = { name: 'test' };
    storage.setStorage(Name, value, 2000); // expire in 1s
    vi.useFakeTimers();
    vi.advanceTimersByTime(10);
    expect(storage.getStorage(Name)).toBeNull();
    vi.useRealTimers();
  });

  test('has storage value', () => {
    const value = { name: 'test' };
    storage.setStorage(Name, value);
    expect(storage.hasStorage(Name)).toBeTruthy();
    expect(storage.hasStorage(Name + 'noHas')).toBeFalsy();
  });

  test('get storage keys', () => {
    const keys = [`${KEY}_${Name}`];
    expect(storage.getStorageKeys()).toEqual(keys);
  });

  test('get storage for index', () => {
    const index = 0;
    expect(storage.getStorageForIndex(index)).toEqual(`${KEY}_${Name}`);
  });

  test('set prefix', () => {
    storage.setStorageConfig({ prefix: '' });
    expect(storage.autoRemovePrefix(`${KEY}_${Name}`)).toEqual(`${KEY}_${Name}`);
    expect(storage.autoAddPrefix(Name)).toEqual(Name);
  });

  test('get the length of session storage', () => {
    expect(storage.getStorageLength()).toEqual(1);
  });

  test('clear storage', () => {
    storage.clearStorage();
    expect(storage.getStorageLength()).toEqual(0);
  });
});
