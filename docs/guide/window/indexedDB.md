
# IndexedDBHelper 使用文档

`IndexedDBHelper` 是一个用于操作 IndexedDB 数据库的 TypeScript 类。它提供了一些基本的数据库操作方法，包括添加、更新、删除和查询数据。

## 基础用法

### 创建一个 `IndexedDBHelper` 实例

```ts
const dbHelper = new IndexedDBHelper('dbName', 1, {
  storeConfigs: [
    {
      storeName: 'storeName',
      keyPath: 'id',
      autoIncrement: true,
      indexConfigs: [
        {
          indexName: 'indexName',
          keyPath: 'keyPath',
          options: { unique: false },
        },
      ],
    },
  ],
  upgradeneeded: () => {
    // 自定义数据操作

    // 添加数据表
    db.createObjectStore('test-add');

    // 删除表
    if (db.objectStoreNames.contains('test-delete-db')) {
      db.deleteObjectStore('test-delete-db');
    }
  }
});
```

### 添加数据

```ts
dbHelper.add('storeName', { id: '1', name: 'name' });
```

### 更新数据

```ts
dbHelper.update('storeName', { id: '1', name: 'newName' });
```

### 删除数据

```ts
dbHelper.delete('storeName', '1');
```

### 根据 id 获取数据

```ts
const data = await dbHelper.get('storeName', '1');
console.log(data);
```

### 根据索引获取数据

```ts
const data = await dbHelper.getByIndex('storeName', 'indexName', 'indexValue');
console.log(data);
```

### 检验数据库连接是否成功

通过 dbPromise 属性的 await 操作来检验数据库连接是否成功。如果数据库连接失败，dbPromise 会抛出错误，您可以通过捕获这个错误来处理数据库连接失败的情况。

``` ts
  try {
    await dbHelper.dbPromise;
    console.log('Database connection successful');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }

```

### 自定义数据表操作

在创建 IndexedDBHelper 实例时提供 upgradeneeded 方法，来实现自定义的数据表添加和删除操作。使用方式与[indexDB的upgradeneeded方法类似](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

```ts
const dbHelper = new IndexedDBHelper('dbName', 2, {
  storeConfigs: [
    {
      storeName: 'storeName',
      keyPath: 'id',
      autoIncrement: true,
      indexConfigs: [
        {
          indexName: 'indexName',
          keyPath: 'keyPath',
          options: { unique: false },
        },
      ],
    },
  ],
  upgradeneeded: () => {
    // 自定义数据操作

    // 添加数据表
    db.createObjectStore('test-add');

    // 删除表
    if (db.objectStoreNames.contains('test-delete-db')) {
      db.deleteObjectStore('test-delete-db');
    }
  }
});
```

## Typescript

``` ts
// 导入 IndexedDBHelper 类
import { IndexedDBHelper } from './index.tsx';

// 定义一个类型来描述你的数据
interface MyData {
  "myStore":{
    id: string;
    name: string;
  }
}

// 创建 IndexedDBHelper 实例
const dbHelper = new IndexedDBHelper<MyData>('myDb', 1, {
  storeConfigs: [
    {
      storeName: 'myStore',
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
  ]
});

// 添加数据
dbHelper.add('myStore', { id: '1', name: 'John' });

// 更新数据
dbHelper.update('myStore', { id: '1', name: 'Jane' });

// 删除数据
dbHelper.delete('myStore', '1');

// 获取数据
dbHelper.get('myStore', '1').then(data => console.log(data));

// 通过索引获取数据
dbHelper.getByIndex('myStore', 'nameIndex', 'John').then(data => console.log(data));

```

## 参数

### IndexedDBHelper

参数 | 说明 | 类型
---|---|---
`dbName` | 数据库名称 | `string`
`version` | 数据库版本 | `number`
`options` | 数据库表配置 | `IndexedDBHelperOptions`

#### `IndexedDBHelperOptions`

参数 | 说明 | 类型
---|---|---
`storeConfigs` | 数据库表配置数组 | `StoreConfig<T, keyof T>[]`
`upgradeneeded` | 数据库升级时的回调函数，[与indexDB的upgradeneeded方法类似](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) <br> 参数为数据库对象、旧版本和新版本 | `(db: IDBDatabase, oldVersion: number, newVersion: number / null) => void`
`blocked` | 数据库被阻止打开时的回调函数，[与indexDB的blocked方法类似](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event)，参数为旧版本、新版本和事件对象 | `(oldVersion: number, newVersion: number / null, event: IDBVersionChangeEvent) => void`

#### `StoreConfig` 数据库存储的配置

字段 | 类型 | 描述
---|---|---
`storeName` | `Extract<U, string>` | 存储名称
`keyPath` | `string` / `string[]` | 键路径
`autoIncrement` | `boolean` | 是否自动增加键值
`indexConfigs` | `IndexConfig[]` | 索引配置数组

#### `IndexConfig` 数据库索引的配置

字段 | 类型 | 描述
---|---|---
`indexName` | `string` | 索引名称
`keyPath` | `string` / `string[]` | 键路径
`options` | `IDBIndexParameters` | 可选参数

## 属性

- dbName
  
  类型：string  

  描述：数据库的名称。  
  
- version

  类型：number

  描述：数据库的版本号。如果版本号高于当前数据库的版本号，将触发 upgradeneeded 事件。

- dbPromise
  
  类型：`Promise<IDBDatabase>`

  描述：打开数据库的 Promise 对象。当数据库打开成功时，该 Promise 将解析为数据库对象。如果数据库打开失败，该 Promise 将被拒绝。

## API

- ### add

  添加数据

  参数：

  参数 | 说明 | 类型
  ---|---|---
  storeName | 存储对象的名称。该名称必须是 T 类型对象的键 | `K`/`string`
  data | 存储对象的数据。其类型与 T 类型对象中对应键的值的类型相同。 | `T[K]`

- ### update

  更新数据

  参数：

  参数 | 说明 | 类型
  ---|---|---
  storeName | 存储对象的名称。该名称必须是 T 类型对象的键 | `K`/`string`
  data | 存储对象的数据。其类型与 T 类型对象中对应键的值的类型相同。 | `T[K]`

- ### delete

  删除数据

  参数：

  参数 | 说明 | 类型
  ---|---|---
  storeName | 存储对象的名称。该名称必须是 T 类型对象的键 | `K`/`string`
  id | 根据`StoreConfig`里的`keyPath`键路径删除数据。 | `IDBValidKey`/`IDBKeyRange`

- ### get

  根据 id 获取数据

  参数：

  参数 | 说明 | 类型
  ---|---|---
  storeName | 存储对象的名称。该名称必须是 T 类型对象的键 | `K`/`string`
  id | 查找记录的键或键范围。[`StoreConfig`](#storeconfig-数据库存储的配置)里的`keyPath` | `IDBValidKey`/`IDBKeyRange`

  返回值：`Promise<T[K]>`

- ### getByIndex

  根据索引获取数据

  参数：

  参数 | 说明 | 类型
  ---|---|---
  storeName | 存储对象的名称。该名称必须是 T 类型对象的键 | `K`/`string`
  indexName | [`IndexConfig`](#indexconfig-数据库索引的配置)里的`keyPath`键路径名称。 | `string`
  indexValue | 查询条件参数。 | `IDBValidKey`/`IDBKeyRange`

  返回值：`Promise<T[K]>`
