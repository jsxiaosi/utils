---
outline: deep
---

# Event

## disableElementEvents

:::demo 禁用Element 右击、复制、黏贴、选择事件

event/disableElementEvents

:::

::: details 示例代码

``` ts
import { disableElementEvents } from '@jsxiaosi/utils'

// 禁用右击
disableElementEvents(document.body, ['contextmenu'])

// 禁用复制
disableElementEvents(document.body, ['copy'])

// 禁用黏贴
disableElementEvents(document.body, ['paste'])

// 禁用选择
disableElementEvents(document.body, ['select'])

// 批量禁用
disableElementEvents(document.body, ['contextmenu', 'copy', 'paste', 'select'])
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
element | Element | T extends HTMLElement | document.body
eventType | 禁用事件类型 | DisableElementEventType[] | []

DisableElementEventType:

参数 | 说明
---------|----------
contextmenu | 禁用右击事件
copy | 禁用复制事件
paste | 禁用黏贴事件
select | 禁用选择事件

## enableElementEvents

:::demo 恢复Element 右击、复制、黏贴、选择事件

event/enableElementEvents

:::

::: details 示例代码

``` ts
import { enableElementEvents } from '@jsxiaosi/utils'

// 恢复右击
enableElementEvents(document.body, ['contextmenu'])

// 恢复复制
enableElementEvents(document.body, ['copy'])

// 恢复黏贴
enableElementEvents(document.body, ['paste'])

// 恢复选择
enableElementEvents(document.body, ['select'])

// 批量恢复
enableElementEvents(document.body, ['contextmenu', 'copy', 'paste', 'select'])
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
element | Element | T extends HTMLElement | document.body
eventType | 恢复事件类型 | DisableElementEventType[] | []

DisableElementEventType:

参数 | 说明
---------|----------
contextmenu | 恢复右击事件
copy | 恢复复制事件
paste | 恢复黏贴事件
select | 恢复选择事件
