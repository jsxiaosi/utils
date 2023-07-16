---
outline: deep
---

# Cookies 操作工具

设置、获取和删除 cookie。

``` ts
import { cookies } from '@jsxiaosi/utils'; 
```

## 设置cookie

```ts
import { cookies } from '@jsxiaosi/utils'; 

// 设置一个名为 'myCookie' 的 cookie，值为 'myValue'，路径为 '/'，在 https 下才会被发送，且在跨站请求时也会被发送
cookies.set('myCookie', 'myValue', { days: 7, path: '/', secure: true, sameSite: 'None' });
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
name | cookie 的名称 | `string` | 无
value | cookie 的值 | `string` | 无
options | cookie 选项配置 |  [`CookieOptions`](#cookieoptions) | 无

## 获取cookie

```ts
import { cookies } from '@jsxiaosi/utils'; 

// 获取名为 'myCookie' 的 cookie 的值
let myCookieValue = cookies.get('myCookie');

// 获取所有的 cookie
let allCookies = cookies.get();
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
name | 可选的 cookie 名称 | `string` | 无

返回值:

类型 | 描述
---------|----------
`string` \| `null` \| `{ [key: string]: string }` | 如果提供了 `name` 参数，那么返回该 cookie 的值；如果没有提供 `name` 参数，那么返回一个包含所有 cookie 的对象；如果找不到指定的 cookie，那么返回 `null`。

## 删除cookie

```ts
import { cookies } from '@jsxiaosi/utils'; 

// 删除名为 'myCookie' 的 cookie
cookies.remove('myCookie');

// 删除所有的 cookie
cookies.remove();
```

参数:

参数 | 描述 | 类型 | 默认值
---------|----------|---------|---------
name | 可选的 cookie 名称 | `string` | 无
options | cookie 选项配置 | [`CookieOptions`](#cookieoptions) | 无

## 类型

### CookieOptions

参数 | 描述 | 类型
---------|----------|---------
expires | 有效期 | `number`
path | 路径 | `string`
domain | cookie所在的域 | `string`
secure | 是否启用安全协议传输 | `boolean`
sameSite | 同站策略 | `string`
