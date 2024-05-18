---
outline: deep
---

# Storage

`localStorage`和`sessionStorage`二次封装，内置存储时效，加密数据存储逻辑
::: details 示例代码

``` js
import { _storage } from '@jsxiaosi/utils'
```

:::

## setStorageConfig

存储配置
::: details 示例代码

``` js
_storage.setStorageConfig({
  prefix: 'prefix',
  // prefix: (key) => `prefix-${key}`,  自定义前缀格式
  expire: 3000, // 50分钟
  secretKey: true,
  secretIv: true
})
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
prefix | 存储前缀 | `string / ((key: string) => string)` | |
expire | 存储时效 | number | 0 | `秒`单位，为0不设置超时时间
isEncrypt | 是否开启加密 | boolean | false |
secretKey | 加密密钥 | string | | isEncrypt为true生效
secretIv | 加密秘钥偏移量 | string | | isEncrypt为true生效

## isSupportStorage

判断当前环境是否支持 Storage
::: details 示例代码

``` js
_storage.isSupportStorage()
```

:::

返回类型： `boolean`

## setStorage`<T>`

设置 setStorage`<T>`
::: details 示例代码

``` js
_storage.setStorage<T>(key, value, expire, type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |
value | 存储对象 | T |  |
expire | 存储时效 | number | 0 | 为0不设置超时时间
type | 存储方式 | localStorage/sessionStorage | localStorage |

## getStorage`<T>`

获取 getStorage`<T>`
::: details 示例代码

``` js
_storage.getStorage<T>(key, expire, type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |
expire | 存储时效 | number | 0 | 为0不设置超时时间
type | 存储方式 | localStorage/sessionStorage | localStorage |

返回类型：`T | null | undefined`

## hasStorage

是否存在 storage
::: details 示例代码

``` js
_storage.hasStorage(key, value)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |
type | 存储方式 | localStorage/sessionStorage | localStorage |

返回类型：`boolean`

## getStorageKeys

获取所有key
::: details 示例代码

``` js
_storage.getStorageKeys(key, value)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |
type | 存储方式 | localStorage/sessionStorage | localStorage |

返回类型：`string[]`

## getStorageForIndex

根据索引获取key
::: details 示例代码

``` js
_storage.getStorageForIndex(index, type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
index | 下标 | number | |
type | 存储方式 | localStorage/sessionStorage | localStorage |

返回类型：`string`

## getStorageLength

获取storage长度
::: details 示例代码

``` js
_storage.getStorageLength(type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
type | 存储方式 | localStorage/sessionStorage | localStorage |

返回类型：`number`

## getStorageAll

获取全部 storage
::: details 示例代码

``` js
_storage.getStorageAll(type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
type | 存储方式 | localStorage/sessionStorage | localStorage |

返回类型：

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |
val | 存储数据 | string | | JSON

## removeStorage

删除 storage
::: details 示例代码

``` js
_storage.removeStorage(key, type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |
type | 存储方式 | localStorage/sessionStorage | localStorage |

## clearStorage

清空 storage
::: details 示例代码

``` js
_storage.clearStorage(type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
type | 存储方式 | localStorage/sessionStorage | localStorage |

## autoAddPrefix

名称前自动添加前缀
::: details 示例代码

``` js
_storage.autoAddPrefix(key)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |

返回类型：`string`

## autoRemovePrefix

名称前自动添加前缀
::: details 示例代码

``` js
_storage.autoRemovePrefix(key)
```

:::

参数:

参数 | 说明 | 类型 | 默认值 | 备注
---------|----------|---------|---------|---------
key | 存储名称 | string | |

返回类型：`string`
