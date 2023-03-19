---
outline: deep
---

# 正则判断

## isUrl

是否为Url地址

``` js
isUrl(val)
```

## isEmail

是否为邮箱

``` js
isEmail(val)
```

## isMobile

是否为手机号码

``` js
isMobile(val)
```

## isPhone

是否为座机号码

``` js
isPhone(val)
```

## isIdCard

判断是否为身份证号码

``` js
isIdCard(val)
```

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

``` js
isWeiXin(val)
```

## isQQBrowser

是否为QQ浏览器

``` js
isQQBrowser(val)
```
