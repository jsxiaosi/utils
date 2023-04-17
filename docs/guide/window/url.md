---
outline: deep
---

# url

处理url中的参数

## objectToUrlParams

:::demo 对象转换url参数

url/objectToUrlParams

:::

:::demo 为对象中的数组设置不同的url参数格式

url/objectToUrlParams_arrayFormat

:::

:::demo 纯数组转换url参数

url/objectToUrlParams_array

:::

::: details 示例代码

``` js
import { objectToUrlParams } from '@jsxiaosi/utils';

const params = {
  name: 'John',
  age: 30,
  tags: ['a', 'b', 'c'],
};

objectToUrlParams(params) // name=John&age=30&tags[]=a&tags[]=b&tags[]=c
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
params | 转换参数 | `Record<string, any> / Array<any>`
arrayFormat | 数组转换类型 | ArrayFormat | 'unnamed'

ArrayFormat:
参数 | 说明
---------|----------
brackets | 使用方括号表示数组
indices | 使用数组索引表示数组
repeat | 重复键名表示数组
comma | 使用逗号分隔数组元素
unnamed | 生成无键名的参数

::: warning
如果params传递是纯数组，那么只会生效’unnamed‘类型
:::

返回类型：`string`

## appendUrlParams

:::demo 在现有的url中添加参数或者追加参数

url/appendUrlParams

:::

::: details 示例代码

``` js
import { appendUrlParams } from '@jsxiaosi/utils';

const params = {
  name: 'John',
  age: 30,
  tags: ['a', 'b', 'c'],
};

appendUrlParams('https://github.com/jsxiaosi',params) 
// https://github.com/jsxiaosi?existingKey=existingValue&name=John&age=30&[]=a&[]=b&[]=c
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | url地址 | string |
params | 转换参数 | `Record<string, any> / Array<any>`
arrayFormat | 数组转换类型 | ArrayFormat | 'unnamed'

ArrayFormat:
参数 | 说明
---------|----------
brackets | 使用方括号表示数组
indices | 使用数组索引表示数组
repeat | 重复键名表示数组
comma | 使用逗号分隔数组元素
unnamed | 生成无键名的参数

## urlParamsToObject

:::demo 在现有的url中添加参数或者追加参数

url/urlParamsToObject

:::

::: details 示例代码

``` js
import { urlParamsToObject } from '@jsxiaosi/utils';

urlParamsToObject('https://github.com/jsxiaosi?name=John&age=30&tags[]=a&tags[]=b&tags[]=c') 
// { "name": "John", "age": "30", "tags": [ "a", "b", "c" ] }
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
queryString | url地址/urlQuery | string |

::: warning
如果URL参数中的数组数据是unnamed（无键名）类型的参数，并且url也包括其他值那么它会把unnamed（无键名）的数组放在对象中一个key名为$unnamedArray的属性中

::: details 示例
`https://github.com/jsxiaosi?name=John&age=30&[]=a&[]=b&[]=c`

转换后：

`{ "name": "John", "age": 30, "$unnamedArray": [ "a", "b", "c" ] }`
:::

返回类型：`Record<string, any> / Array<any>`
