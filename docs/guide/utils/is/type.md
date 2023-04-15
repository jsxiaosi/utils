---
outline: deep
---

# 类型判断

## is

通过Object.prototype.toString() 检测对象类型

::: details 示例代码

``` js
is(val, type)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
val | 数据源 | unknown |
type | 数据类型 | string |

## isDef

判断属性是否已定义（不等于Undefined）

::: details 示例代码

``` js
isDef(val)
```

:::

## isUnDef

判断属性是否未定义（等于Undefined）

::: details 示例代码

``` js
isUnDef(val)
```

:::

## isObject

判断属性是否为Object类型

::: details 示例代码

``` js
isObject(val)
```

:::

## isObjectHasValue

判断是否为空对象

::: details 示例代码

``` js
isObjectHasValue(val)
```

:::

## isEmpty

判断 String Array Map Set Object 是否为空

::: details 示例代码

``` js
isEmpty(val)
```

:::

## isDate

判断是否为Date类型

::: details 示例代码

``` js
isDate(val)
```

:::

## isNull

判断属性是否为Null

::: details 示例代码

``` js
isNull(val)
```

:::

## isNullOrUnDef

是否等Null或者Undefined

::: details 示例代码

``` js
isNullOrUnDef(val)
```

:::

## isNumber

是否为Number类型

::: details 示例代码

``` js
isNumber(val)
```

:::

## isPromise

是否为Promise类型

::: details 示例代码

``` js
isPromise(val)
```

:::

## isString

是否为String类型

::: details 示例代码

``` js
isString(val)
```

:::

## isFunction

是否为Function类型

::: details 示例代码

``` js
isFunction(val)
```

:::

## isBoolean

是否为Boolean类型

::: details 示例代码

``` js
isBoolean(val)
```

:::

## isRegExp

是否为正则表达式

::: details 示例代码

``` js
isRegExp(val)
```

:::

## isArray

是否为Array类型

::: details 示例代码

``` js
isArray(val)
```

:::

## isWindow

是否为Window对象

::: details 示例代码

``` js
isWindow(val)
```

:::

## isElement

是否为Element

::: details 示例代码

``` js
isElement(val)
```

:::
