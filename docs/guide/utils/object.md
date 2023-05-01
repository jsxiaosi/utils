---
outline: deep
---

# Object

## getObjectNestedValue

从对象中获取嵌套属性值。根据给定的键路径从对象中获取值，并在找到匹配的键路径时返回该值。如果找不到匹配的键路径，它将返回 undefined。

::: details 示例代码

```ts
  import { getObjectNestedValue } from '@jsxiaosi/utils';

  const obj = {
    a: {
      b: {
        c: 42,
      },
    },
  };

  console.log(getObjectNestedValue(obj, 'a.b.c')); // 42
  console.log(getObjectNestedValue(obj, 'a.b.x')); // undefined
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
obj | 要从中获取嵌套属性值的对象 | T |
keyPath | 一个表示嵌套键路径的字符串，例如 "a.b.c"。键路径必须对 obj 有效 | any |

返回类型：`any` | `undefined`

## byPathEqualObjectValues

比较两个对象在指定的嵌套键路径下的值。如果在键路径的值相等，则返回 true；否则返回 false。

::: details 示例代码

```ts
  import { byPathEqualObjectValues } from '@jsxiaosi/utils';

  const obj1 = { a: { b: { c: 42 } } };
  const obj2 = { a: { b: { c: 42 } } };
  const obj3 = { a: { b: { c: 43 } } };

  byPathEqualObjectValues(obj1, obj2, 'a.b.c') // true
  byPathEqualObjectValues(obj1, obj3, 'a.b.c') // false
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
obj1 | 要比较的对象 | T |
obj2 | 要比较的对象 | T |
keyPath | 一个表示嵌套键路径的字符串，例如 "a.b.c"。键路径必须对 obj 有效 | any |

返回类型：`boolean`

## deepEqualObject

深度对比两个对象值是否相等，基于[deepEqual](/guide/function/deepEqual)封装

::: details 示例代码

```ts
  import { deepEqualObject } from '@jsxiaosi/utils';

  const obj1 = { a: { b: { c: 42 } } };
  const obj2 = { a: { b: { c: 42 } } };
  const obj3 = { a: { b: { c: 43 } } };

  deepEqualObject(obj1, obj2) // true
  deepEqualObject(obj1, obj3) // false
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
obj1 | 要比较的对象 | T |
obj2 | 要比较的对象 | T |

返回类型：`boolean`
