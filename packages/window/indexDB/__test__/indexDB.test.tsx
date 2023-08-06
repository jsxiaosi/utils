import { beforeAll, describe, expect, test } from 'vitest';
import { IndexedDBHelper } from '..';
import 'fake-indexeddb/auto';

describe('IndexedDBHelper', () => {
  let dbHelper: IndexedDBHelper<any>;

  beforeAll(() => {
    dbHelper = new IndexedDBHelper('testDb', 1, {
      storeConfigs: [
        {
          storeName: 'testStore',
          keyPath: 'id',
          autoIncrement: true,
          indexConfigs: [
            {
              indexName: 'nameIndex',
              keyPath: 'name',
              options: { unique: false },
            },
          ],
        },
        {
          storeName: 'deleteTestStore',
          keyPath: 'id',
          autoIncrement: true,
          indexConfigs: [
            {
              indexName: 'nameIndex',
              keyPath: 'name',
              options: { unique: false },
            },
          ],
        },
      ],
      upgradeneeded: () => {},
    });
  });

  test('should add data', async () => {
    await dbHelper.add('testStore', { id: '1', name: 'John' });
    const data = await dbHelper.get('testStore', '1');
    expect(data).toEqual({ id: '1', name: 'John' });
  });

  test('should update data', async () => {
    await dbHelper.update('testStore', { id: '1', name: 'Jane' });
    const data = await dbHelper.get('testStore', '1');
    expect(data).toEqual({ id: '1', name: 'Jane' });
  });

  test('should delete data', async () => {
    await dbHelper.delete('deleteTestStore', '1');
    const data = await dbHelper.get('deleteTestStore', '1');
    expect(data).toBeUndefined();
  });

  test('should get data by index', async () => {
    await dbHelper.add('testStore', { id: '2', name: 'John' });
    const data = await dbHelper.getByIndex('testStore', 'nameIndex', 'John');
    expect(data).toEqual({ id: '2', name: 'John' });
  });
});
