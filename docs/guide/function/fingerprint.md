---
outline: deep
---

# 浏览器指纹

通过浏览器信息生成指纹ID，这种方式生成出来的指纹唯一性不高，可能达到50%~60%，最好的方式还是通过后端生成，这里同时也提供了获取需要生成指纹ID的浏览器信息

## getFingerprintId

:::demo 获取浏览器指纹ID

fingerprint/getFingerprintId

:::

::: details 示例代码

```ts
  import { getFingerprintId } from '@jsxiaosi/utils';

  getFingerprintId(options) // Promise<string>
```

:::

参数:
参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
options | 控制属性作为浏览器指纹的一部分 | FingerprintOptionFlags |

FingerprintOptionFlags:
参数 | 说明 | 类型
---------|----------|---------
userAgent | 使用用户代理数据作为浏览器指纹 | boolean
deviceMemory | 使用设备内存大小作为浏览器指纹 | boolean
languages | 使用浏览器语言列表作为浏览器指纹 | boolean
timezone | 使用设备的时区设置作为浏览器指纹 | boolean
hardwareConcurrency | 使用设备的核心数量作为浏览器指纹 | boolean
plugins | 使用浏览器插件信息作为浏览器指纹 | boolean
canvas | 使用Canvas图形绘制的结果作为浏览器指纹 | boolean
webGl | 使用图形渲染信息作为浏览器指纹 | boolean
screen | 使用屏幕尺寸和颜色深度作为浏览器指纹 | boolean
sessionStorage | 使用sessionStorage可用性作为浏览器指纹 | boolean
localStorage | 使用localStorage可用性作为浏览器指纹 | boolean
cookies | 使用cookies可用性作为浏览器指纹 | boolean
indexedDB | 使用IndexedDB可用性作为浏览器指纹 | boolean
audio | 使用音频ID作为浏览器指纹 | boolean

返回类型：`Promise<string>`

## getAllFingerprintInfo

:::demo 获取浏览器指纹信息

fingerprint/getAllFingerprintInfo

:::

::: details 示例代码

```ts
  import { getAllFingerprintInfo } from '@jsxiaosi/utils';

  getAllFingerprintInfo() // Promise<FingerprintInfo>
```

:::

返回类型：`Promise<FingerprintInfo>`

FingerprintInfo:
参数 | 说明 | 类型
---------|----------|---------
userAgent | 用户代理数据指纹信息 | string
deviceMemory | 设备内存大小指纹信息 | number
languages | 浏览器语言列表指纹信息 | string[]
timezone | 设备的时区设置指纹信息 | string
hardwareConcurrency | 设备的核心数量指纹信息 | number
plugins | 浏览器插件信息指纹信息 | PluginData[]
canvas | Canvas图形绘制的结果指纹信息 | string
webGl | 图形渲染信息指纹信息 | WebGl
screen | 屏幕尺寸和颜色深度指纹信息 | Screen
sessionStorage | sessionStorage可用性指纹信息 | boolean
localStorage | localStorage可用性指纹信息 | boolean
cookies | cookies可用性指纹信息 | boolean
indexedDB | IndexedDB可用性指纹信息 | boolean
audio | 音频ID指纹信息 | number
