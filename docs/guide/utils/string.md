---
outline: deep
---

# string

## stringTrim

:::demo 去除字符串空格

string/stringTrim

:::

::: details 示例代码

```js
  import { stringTrim } from '@jsxiaosi/utils';

  stringTrim('   abc   def   ghi   ','all'); // 'abcdefghi'
```

:::

参数：

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
str | 需要转换的字符串 | string |
type | 转换类型 | StringTrimType | all |

StringTrimType：
参数 | 说明
---------|----------
all | 去除全部空格
left | 去除首位空格
right | 去除尾部空格

返回类型：`string`

## transformString

:::demo 字母转换驼峰，通过`-`区分单词

string/transformString

:::

::: details 示例代码

```js
  import { transformString } from '@jsxiaosi/utils';

  transformString('my-transform-string','upperCamelCase'); // 'MyTransformString'
```

:::

参数：

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
str | 需要转换的字符串 | string |
type | 转换类型 | StringTransformType |  |

StringTransformType：
参数 | 说明
---------|----------
lowerCamelCase | 小驼峰(第一个单词首字母小写，其他单词首字母大写)转换，并去掉`-`
upperCamelCase | 大驼峰(全部单词首字母大写)转换，并去掉`-`
upperCase | 全部转换为大写，保留`-`

返回类型：`string`
