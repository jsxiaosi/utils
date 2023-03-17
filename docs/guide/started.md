---
outline: deep
---

# 开始

## 包管理器安装

如 NPM、Yarn 或 Pnpm。如果下载过慢建议使用国内镜像`https://registry.npmmirror.com/`

::: code-group

```sh [npm]
npm install @jsxiaosi/utils
```

``` sh [yarn]
yarn add @jsxiaosi/utils
```

``` sh [pnpm]
pnpm add @jsxiaosi/utils
```

:::

### 使用

``` js
  import { isObject } from '@jsxiaosi/utils';

  function dev (){
   if( isObject({})){
    // ...
  }
```

## CDN 引入

直接通过浏览器的 HTML 标签导入，然后通过全局变量`jsxsUtils`使用工具函数。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 unpkg 和 jsDelivr 举例。

::: code-group

``` js [unpkg]
<script src="https://unpkg.com/@jsxiaosi/utils"></script>
```

``` js [jsdelivr]
<script src="https://cdn.jsdelivr.net/npm/@jsxiaosi/utils"></script>
```

:::

### 使用

``` js
  jsxsUtils.isObject()
```
