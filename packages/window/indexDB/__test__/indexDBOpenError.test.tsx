import { expect, test, vitest } from 'vitest';
import { IndexedDBHelper } from '..';
import 'fake-indexeddb/auto';

test('should reject when indexedDB.open fails', async () => {
  // Replace indexedDB.open with a function that always fails
  const originalOpen = window.indexedDB.open;
  window.indexedDB.open = vitest.fn(() => {
    const request = {} as IDBOpenDBRequest;
    setTimeout(() => request.onerror?.(new ErrorEvent('error')), 0); // Trigger an error event
    return request;
  });

  const dbHelper = new IndexedDBHelper('testDb', 1, [
    // ...
  ]);

  // The dbPromise should reject with 'Error opening database'
  await expect(dbHelper.dbPromise).rejects.toEqual('Error opening database');

  // Restore the original indexedDB.open function
  window.indexedDB.open = originalOpen;
});

test('should reject when get fails', async () => {
  const dbHelper = new IndexedDBHelper('testDb', 1, []);

  // The get method should reject with an error
  await expect(dbHelper.get('storeName', '1')).rejects.toThrow();
});

test('should reject when getByIndex fails', async () => {
  const dbHelper = new IndexedDBHelper('testDb', 1, []);

  // The get method should reject with an error
  await expect(dbHelper.getByIndex('storeName', 'name', '1')).rejects.toThrow();
});
