---
outline: deep
---

# FullScreen

开启和关闭全屏模式的方法。

## openFullScreen

开启全屏模式。如果提供了 `element` 参数，那么 `element` 将会进入全屏模式；如果没有提供 `element` 参数，那么整个页面将会进入全屏模式。

```ts
import { openFullScreen } from '@jsxiaosi/utils'; 

// 整个页面进入全屏模式
openFullScreen();

// 指定元素进入全屏模式
const elem: HTMLDivElement = document.createElement('div');
openFullScreen(elem);
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
element | 要进入全屏模式的元素 | `HTMLElement` | `document.body` |

## closeFullScreen

关闭全屏模式。

```ts
import { closeFullScreen } from '@jsxiaosi/utils'; 

// 退出全屏模式
closeFullScreen();
```
