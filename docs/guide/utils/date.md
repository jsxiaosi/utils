---
outline: deep
---

# Date

## isNormalDate

判断传入的Date是否是一个正常的日期对象

::: details 示例代码

```ts
  import { isNormalDate } from '@jsxiaosi/utils';

  isNormalDate(new Date()) // true
  isNormalDate(new Date('invalid')) // false
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
date | 判断的日期 | `Date` |

返回类型： `boolean`

## parseDate

字符串转Date对象

::: details 示例代码

```ts
  import { parseDate } from '@jsxiaosi/utils';

  parseDate('2023-02-22 12:11:33') //Wed Feb 22 2023 12:11:33 GMT+0800 (中国标准时间) Date
  parseDate('2023-02-22 12:11:33.123') // Wed Feb 22 2023 12:11:33 GMT+0800 (中国标准时间) Date
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
dateInput | 日期字符串 | `string` / `Date` |

返回类型： `Date`

## parseDateTime

时间转Date对象

::: details 示例代码

```ts
  import { parseDate } from '@jsxiaosi/utils';

  parseDate('12:11:33') // Fri Apr 21 2023 12:11:33 GMT+0800 (中国标准时间) Date
  parseDate('12:11:33.123') // Fri Apr 21 2023 12:11:33 GMT+0800 (中国标准时间) Date
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
dateInput | 时间字符串 | `string` / `Date` |

返回类型： `Date`

## isDateTimeInRange

判断时间是否在指定范围内

::: details 示例代码

```ts
  import { isDateTimeInRange } from '@jsxiaosi/utils';

  isDateTimeInRange('12:00:00.100-15:00:00.000', '12:00:00.100') // true
  isDateTimeInRange('12:00:00.100-15:00:00.000', '12:00:00.000') // false

  isDateTimeInRange('12:00:00-15:00:00', '12:00:01') // true
  isDateTimeInRange('12:00:00-15:00:00', '15:00:01') // false

  isDateTimeInRange('12:00-15:00', '12:00:01') // true
  isDateTimeInRange('12:00-15:00', '15:00:01') // false

  isDateTimeInRange('12-15', '12:00:01') // true
  isDateTimeInRange('12-15', '15:00:01') // false

  isDateTimeInRange('12:00-15:00', '12:00') // true
  isDateTimeInRange('12:00-15:00', '15:01') // false

  isDateTimeInRange('12:00-15:00', '12') // true
  isDateTimeInRange('12:00-15:00', '15') // true
```

:::

::: warning ⚠️
此函数仅仅作用域判断时间范围，dateTimeRange不能带上日期否则会转换错误  
如果要判断日期时间请使用isDateInRange
:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
dateTimeRange | 时间范围 | `string` |
date | 日期时间 | `string` / `Date` | `new Date()`

返回类型： `boolean`

## isDateInRange

判断日期是否在指定范围内

::: details 示例代码

```ts
  import { parseDate } from '@jsxiaosi/utils';

  isDateInRange('2023-04-21 12:00:00', '2023-04-21 15:00:00', '2023-04-21 12:33:22.123') // true
  isDateInRange('2023-04-20', '2023-04-22', '2023-04-21') // true
  isDateInRange('2023-04-20', '2023-04-21', '2023-04-22') // false
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
startDateInput | 开始日期 | `string` / `Date` |
endDateInput | 结束 | `string` / `Date` |
date | 日期时间 | `string` / `Date` | `new Date()`

返回类型： `boolean`

## compareDates

比较日期 判断第一个日期是否大于、大于等于、小于、小于等于第二个日期

::: details 示例代码

```ts
  import { compareDates } from '@jsxiaosi/utils';

  const date1 = '2023-04-21 12:33:22';
  const date2 = '2023-04-21 12:33:23';

  compareDates(date1, date2, 'greater') // false date1不大于data2
  compareDates(date1, date2, 'greaterOrEqual') // false date1不大于等于data2
  compareDates(date1, date2, 'less') // true date1小于data2
  compareDates(date1, date2, 'lessOrEqual') // true date1小于等于data2

```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
date | 待比较日期 | `string` / `Date` |
startDate | 开始日期 | `string` / `Date` |
comparison | 比较类型 | `ComparisonType` | `greaterOrEqual`

ComparisonType:

参数 | 说明
---------|----------
greater | 大于
greaterOrEqual | 大于等于
less | 小于
lessOrEqual | 小于等于

返回类型： `boolean`
