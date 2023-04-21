<div align='center' ><h2>@jsxiaosi/utils</h2></div>

JavaScript 工具库，使用TypeScript编写

## 文档

<https://jsxiaosi-utils.vercel.app/>

## 特性

- **📦 按需引入**：支持按需引入，大大缩小打包后体积.
- **🔗 支持CDN引入**：支持打包输出小巧的CDN模块，可同时支持UnPkg、JsDelivr CDN引入方式.
- **⚡️ 上手简单**： 日常需要大量代码实现的功能，现在仅需一行代码搞定.

## 开始

### 包管理器安装

如 NPM、Yarn 或 Pnpm。如果下载过慢建议使用国内镜像`https://registry.npmmirror.com/`

```sh
npm install @jsxiaosi/utils
```

``` sh
yarn add @jsxiaosi/utils
```

``` sh
pnpm add @jsxiaosi/utils
```

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

``` js [unpkg]
<script src="https://unpkg.com/@jsxiaosi/utils"></script>
```

``` js [jsdelivr]
<script src="https://cdn.jsdelivr.net/npm/@jsxiaosi/utils"></script>
```

### 使用

``` js
  jsxsUtils.isObject()
```

## maintainers

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
