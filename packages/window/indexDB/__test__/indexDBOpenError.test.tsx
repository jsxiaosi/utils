import { expect, test, vitest } from 'vitest';
import { IndexedDBHelper } from '..';
import 'fake-indexeddb/auto';

test('should reject when indexedDB.open fails', async () => {
  new IndexedDBHelper('errorDB', 2, { storeConfigs: [] });
  const dbHelper = new IndexedDBHelper('errorDB', 1, { storeConfigs: [] });
  await expect(dbHelper.dbPromise).rejects.toThrow();
});

test('should trigger the onblocked handler when onblocked event occurs', () => {
  const mockBlockedHandler = vitest.fn();
  const options: any = {
    blocked: mockBlockedHandler,
  };

  const dbHelper = new IndexedDBHelper('testDB', 1, options);
  // 触发 blocked 事件处理程序
  dbHelper.dbRequest.onblocked?.(new Event('blocked') as IDBVersionChangeEvent);

  // 检查 blocked 回调是否被调用
  expect(mockBlockedHandler).toHaveBeenCalled();
});

test('should reject when get fails', async () => {
  const dbHelper = new IndexedDBHelper('testDb', 1, { storeConfigs: [] });

  // The get method should reject with an error
  await expect(dbHelper.get('storeName', '1')).rejects.toThrow();
});

test('should reject when getByIndex fails', async () => {
  const dbHelper = new IndexedDBHelper('testDb', 1, { storeConfigs: [] });

  // The get method should reject with an error
  await expect(dbHelper.getByIndex('storeName', 'name', '1')).rejects.toThrow();
});
