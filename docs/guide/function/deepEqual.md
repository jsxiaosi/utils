---
outline: deep
---

# 深度匹配器

支持多类型匹配`string`、`number`、`boolean`、`Date`、`RegExp`、`Function`、`Object`、`Array` 多种类型匹配

## deepEqual

深度匹配两个值是否相等

::: details 示例代码

```ts
  import {deepEqual } from '@jsxiaosi/utils';

  deepEqual(val1,val2) // boolean
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
val1 | 要比较的对象 | any |
val2 | 要比较的对象 | any |

返回类型：`boolean`
