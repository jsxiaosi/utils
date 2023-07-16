
# IndexedDBHelper 使用文档

`IndexedDBHelper` 是一个用于操作 IndexedDB 数据库的 TypeScript 类。它提供了一些基本的数据库操作方法，包括添加、更新、删除和查询数据。

## 基础用法

创建一个 `IndexedDBHelper` 实例：

```ts
const dbHelper = new IndexedDBHelper('dbName', 1, [
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
]);
```

添加数据：

```ts
dbHelper.add('storeName', { id: '1', name: 'name' });
```

更新数据：

```ts
dbHelper.update('storeName', { id: '1', name: 'newName' });
```

删除数据：

```ts
dbHelper.delete('storeName', '1');
```

根据 id 获取数据：

```ts
const data = await dbHelper.get('storeName', '1');
console.log(data);
```

根据索引获取数据：

```ts
const data = await dbHelper.getByIndex('storeName', 'indexName', 'indexValue');
console.log(data);
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
const dbHelper = new IndexedDBHelper<MyData>('myDb', 1, [
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
]);

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
`storeName` | 数据库名称 | `string`
`version` | 数据库版本 | `number`
`dbPromise` | 数据库表配置 | `StoreConfig`

#### `StoreConfig` 数据库存储的配置

字段 | 类型 | 描述
---|---|---
`storeName` | `Extract<U, string>` | 存储名称
`keyPath` | `string` 或 `string[]` | 键路径
`autoIncrement` | `boolean` | 是否自动增加键值
`indexConfigs` | `IndexConfig[]` | 索引配置数组

#### `IndexConfig` 数据库索引的配置

字段 | 类型 | 描述
---|---|---
`indexName` | `string` | 索引名称
`keyPath` | `string` 或 `string[]` | 键路径
`options` | `IDBIndexParameters` | 可选参数

## API

方法 | 参数 | 返回值 | 描述
---|---|---|---
`constructor` | `dbName: string, version: number, storeConfigs: StoreConfig<T, keyof T>[]` | - | 构造函数
`add` | `storeName: Extract<K, string>, data: T[K]` | `Promise<void>` | 添加数据
`update` | `storeName: Extract<K, string>, data: T[K]` | `Promise<void>` | 更新数据
`delete` | `storeName: Extract<K, string>, id: string` | `number` | `Promise<void>` | 删除数据
`get` | `storeName: Extract<K, string>, id: string` | `number` | `Promise<T[K]>` | 根据 id 获取数据
`getByIndex` | `storeName: Extract<K, string>, indexName: string, indexValue: string` | `number` | `Promise<T[K]>` | 根据索引获取数据
