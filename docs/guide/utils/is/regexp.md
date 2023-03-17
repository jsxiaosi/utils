---
outline: deep
---

# is 判断

## is

通过Object.prototype.toString() 检测对象类型

``` js
is(val, type)
```

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
val | 数据源 | unknown |
type | 数据类型 | string |

## isDef

判断属性是否已定义（不等于Undefined）

``` js
isDef(val)
```

## isUnDef

判断属性是否未定义（等于Undefined）

``` js
isUnDef(val)
```

## isObject

判断属性是否为Object类型

``` js
isObject(val)
```

## isEmpty

判断 String Array Map Set Object 是否为空

``` js
isEmpty(val)
```

## isDate

判断是否为Date类型

``` js
isDate(val)
```

## isNull

判断属性是否为Null

``` js
isNull(val)
```

## isNullOrUnDef

是否等Null或者Undefined

``` js
isNullOrUnDef(val)
```

## isNumber

是否为Number类型

``` js
isNumber(val)
```

## isPromise

是否为Promise类型

``` js
isPromise(val)
```

## isString

是否为String类型

``` js
isString(val)
```

## isFunction

是否为Function类型

``` js
isFunction(val)
```

## isBoolean

是否为Boolean类型

``` js
isBoolean(val)
```

## isRegExp

是否为正则表达式

``` js
isRegExp(val)
```

## isArray

是否为Array类型

``` js
isArray(val)
```

## isWindow

是否为Window对象

``` js
isWindow(val)
```

## isElement

是否为Element

``` js
isElement(val)
```

## isUrl

是否为Url地址

``` js
isUrl(val)
```
