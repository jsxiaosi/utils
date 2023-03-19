---
outline: deep
---

# Class

element 类名添加、删除、查找操作

## hasClass

判断当前class类名是否在element中

::: details 示例代码

``` ts
import { hasClass } from '@jsxiaosi/utils'
const ele: HTMLDivElement = document.createElement('div');

ele.className = 'foo bar';

hasClass(ele, 'foo') // true
hasClass(ele, 'baz') // false
```

:::

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
ele | Element | T extends HTMLElement |
cls | class类名 | string |

返回类型 `Blob`

## addClass

:::demo 在element添加class类名

class/addClass

:::

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
ele | Element | T extends HTMLElement |
cls | class类名 | string |

## removeClass

:::demo 在element删除class类名

class/removeClass

:::

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
ele | Element | T extends HTMLElement |
cls | class类名 | string |
