---
outline: deep
---

# 浏览器信息

## getBrowserInfo

:::demo 获取浏览器信息

browser/getBrowserInfo

:::

::: details 示例代码

``` ts
  import { getBrowserInfo } from '@jsxiaosi/utils';

  getBrowserInfo(); 
  // { "browserName": "Chrome", "browserVersion": "112.0.0.0", "operatingSystem": "Mac OS" }
```

:::

返回类型 `BrowserInfo`

BrowserInfo:
参数 | 说明 | 类型
---------|----------|---------
browserName | 浏览器内核名称 | `string`
browserVersion | 浏览器内核版本 | `string`
operatingSystem | 系统运行环境 | `string`

## getDeviceType

:::demo 获取当前设备类型

browser/getDeviceType

:::

::: details 示例代码

``` ts
  import { getDeviceType } from '@jsxiaosi/utils';

  getDeviceType(); // 'Mobile' / 'Desktop'
```

:::

返回类型 `DeviceType`

DeviceType:
参数 | 说明 | 类型
---------|----------|---------
Mobile | 移动端 | `string`
Desktop | PC端 | `string`
