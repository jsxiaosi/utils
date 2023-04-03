---
outline: deep
---

# 正则判断

## isUrl

是否为Url地址
::: details 示例代码

``` js
isUrl(val)
```

:::

## isEmail

是否为邮箱
::: details 示例代码

``` js
isEmail(val)
```

:::

## isMobile

是否为手机号码
::: details 示例代码

``` js
isMobile(val)
```

:::

## isPhone

是否为座机号码
::: details 示例代码

``` js
isPhone(val)
```

:::

## isIdCard

判断是否为身份证号码
::: details 示例代码

``` js
isIdCard(val)
```

:::

返回值：
参数 | 说明 | 类型
---------|----------|---------
code | 错误类型 | errorCode
result | 判断是否通过 | boolen

errorCode：
参数 | 说明
---------|----------
1001 | 长度格式不正确
2001 | 城市编号验证不通过
3001 | 身份证号码生日格式不正确
4001 | 身份证号码校验不通过（最后一个字符与计算不匹配）

## isWeiXin

是否为微信浏览器
::: details 示例代码

``` js
isWeiXin()
```

:::

## isQQBrowser

是否为QQ浏览器
::: details 示例代码

``` js
isQQBrowser()
```

:::

## isImage

文件是否为图片格式：  
jpg，jpeg，png，gif，bmp，svg，webp
::: details 示例代码

``` js
isImage(fileName)
```

:::

## isWord

文件是否为Word格式：  
doc，docx，docm，dot，dotx，dotm，docb
::: details 示例代码

``` js
isWord(fileName)
```

:::

## isExcel

文件是否为Excel格式：  
xls，xlsx，xlsm，xlsb，xlt，xltx，xltm，xlam
::: details 示例代码

``` js
isExcel(fileName)
```

:::

## isPowerPoint

文件是否为PPT格式：  
ppt，pptx，pptm，pot，potx，potm，ppa，ppam，pps，ppsx，ppsm
::: details 示例代码

``` js
isPowerPoint(fileName)
```

:::
