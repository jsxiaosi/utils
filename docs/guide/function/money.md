---
outline: deep
---

# money

金额转换工具

## 千分符

:::demo 金额添加千分符

money/amountSeparator

:::

::: details 示例代码

``` ts
import { amountSeparator } from '@jsxiaosi/utils';

amountSeparator(123456789) // 123,456,789
```

:::

参数:

参数 | 说明 | 类型
---------|----------|---------
amount | 金额 | string / number |

返回类型`string`

## 保留小数位

:::demo 金额保留小数位

money/formatDecimal

:::

::: details 示例代码

``` ts
import { formatDecimal } from '@jsxiaosi/utils';

formatDecimal(12345.6789,2) // 12345.67
```

:::

参数:

参数 | 说明 | 类型
---------|----------|---------
amount | 金额 | string / number |
decimalPlaces| 位数 | number

返回类型`string`

## 分转元

:::demo 金额分单位转元单位

money/centsToYuan

:::

::: details 示例代码

``` ts
import { centsToYuan } from '@jsxiaosi/utils';

centsToYuan(1234567) // 12345.67
```

:::

参数:

参数 | 说明 | 类型
---------|----------|---------
amount | 金额 | string / number |

返回类型`number`

## 元转分

:::demo 金额元单位转分单位

money/yuanToCents

:::

::: details 示例代码

``` ts
import { yuanToCents } from '@jsxiaosi/utils';

yuanToCents(12345.67) // 1234567
```

:::

参数:

参数 | 说明 | 类型
---------|----------|---------
amount | 金额 | string / number |

返回类型`number`

## 金额转大写

:::demo 金额转换为中文大写

money/toChineseUpper

:::

::: details 示例代码

``` ts
import { toChineseUpper } from '@jsxiaosi/utils';

toChineseUpper(12345.67) // 壹万贰仟叁佰肆拾伍元陆角柒分
```

:::

参数:

参数 | 说明 | 类型
---------|----------|---------
amount | 金额 | string / number |

返回类型`string`
