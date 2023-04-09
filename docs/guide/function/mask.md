---
outline: deep
---

# 信息脱敏（mask）

敏感信息脱敏展示

## mask

:::demo 通用信息脱敏

mask/mask

:::

::: details 示例代码

``` ts
import { mask } from '@jsxiaosi/utils';

mask('123456789', 3, 7, '#') // 123####89
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
str | 需要进行脱敏处理的原始字符串 | string |
start | 脱敏的起始位置 | number |
end | 脱敏的结束位置 | number |
maskChar | 脱敏的字符 | string | *

返回类型：`string`

## maskMobile

:::demo 手机号码脱敏

mask/maskMobile

:::

::: details 示例代码

``` ts
import { maskMobile } from '@jsxiaosi/utils';

maskMobile('123456789', '-') // 123####89
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
str | 需要进行脱敏处理的原始字符串 | string |
maskChar | 脱敏的字符 | string | *

返回类型：`string`


## maskEmail

:::demo 邮箱脱敏

mask/maskEmail

:::

::: details 示例代码

``` ts
import { maskEmail } from '@jsxiaosi/utils';

maskEmail('abcdefghi@gmail.com') // abcd****@gmail.com
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
str | 需要进行脱敏处理的原始字符串 | string |
maskChar | 脱敏的字符 | string | *

返回类型：`string`

## maskIdCard

:::demo 身份证号脱敏

mask/maskIdCard

:::

::: details 示例代码

``` ts
import { maskIdCard } from '@jsxiaosi/utils';

maskIdCard('110101199901011234') // 110***********1234
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
str | 需要进行脱敏处理的原始字符串 | string |
maskChar | 脱敏的字符 | string | *

返回类型：`string`