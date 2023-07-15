---
outline: deep
---

# Style

element 操作元素内联样式

## getStyle

获取元素的内联样式。

```ts
import { getStyle } from '@jsxiaosi/utils';

const elem: HTMLDivElement = document.createElement('div');

elem.style.setProperty('color', 'red');

getStyle(elem);  // { color: 'red' }
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
elem | 要获取样式的元素 | `HTMLElement` |

返回类型: `CSSProperty`

## setStyle

设置元素的内联样式。

```ts
import { setStyle } from '@jsxiaosi/utils';

const elem: HTMLDivElement = document.createElement('div');

setStyle(elem, { color: 'red' });
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
elem | 要设置样式的元素 | `HTMLElement` |
styles | 要设置的样式 | `CSSProperty` |

## removeStyle

移除元素指定的内联样式。

```ts
import { removeStyle } from '@jsxiaosi/utils';

const elem: HTMLDivElement = document.createElement('div');

elem.style.setProperty('color', 'red');

removeStyle(elem, ['color']);
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
elem | 要移除样式的元素 | `HTMLElement` |
styles | 要移除的样式 | `Styles[]` |
