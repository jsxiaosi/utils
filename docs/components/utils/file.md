---
outline: deep
---

# 文件流转换

## 下载图片

:::demo 通过图片地址下载图片

file/downloadUrlImage

:::

downloadUrlImage(url, fileName, fileType)

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 图片地址 | string |
fileName | 保存文件的名称 | string |
fileType | 保存图片的类型 | string | image/png

## 下载文件

:::demo 通过文件地址下载文件

file/downloadUrlFile

:::

downloadUrlFile(url, fileName, requestOption, fileType)

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 下载文件地址 | string |
fileName | 保存文件的名称 | string |
requestOption | 发送请求参数 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/body) |
fileType | blob中的数组内容的MIME类型 | BlobPropertyBag['type'] | application/octet-stream

## url图片转成base64

:::demo

file/urlToBase64

:::

urlToBase64(url, fileType)

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 图片地址 | string |
fileType | 图片的类型 | string | image/png

## url转Blob

:::demo

file/urlToBlob

:::

urlToBlob(url, requestOption)

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 图片地址 | string |
requestOption | 发送请求参数 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/body) |

## 保存文件到本地

:::demo

file/downloadFile

:::

downloadFile(data, fileName, fileType)

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
data | blob对象 | Blob |
fileName | 保存文件的名称 | string |
fileType | blob中的数组内容的MIME类型 | BlobPropertyBag['type'] | application/octet-stream

## File转化为Base64

::: details 示例代码

```js
  import { fileToBase64 } from 'xs-utils';

  await fileToBase64(file)
```

:::

fileToBase64(file): `Promise<string>`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
file | file对象 | File |

返回类型 `Promise<string>` 一个base64字符串

## File转化为二进制字符串

::: details 示例代码

```js
  import { fileToBinaryString } from 'xs-utils';

  await fileToBinaryString(file)
```

:::

fileToBinaryString(file): `Promise<string>`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
file | file对象 | File |

返回类型 `Promise<string>` 一个二进制字符串

## File转化为二进制数组

::: details 示例代码

```js
  import { fileToArrayBuffer } from 'xs-utils';

  await fileToArrayBuffer(file)
```

:::

fileToArrayBuffer(file): `Promise<ArrayBuffer>`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
file | file对象 | File |

返回类型 `Promise<ArrayBuffer>` 一个二进制数组

## Base64转化为Blob流

::: details 示例代码

```js
  import { base64ToBlob } from 'xs-utils';

  await base64ToBlob(base64Data)
```

:::

base64ToBlob(base64Data): `Blob`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
base64Data | base64字符串 | string |

返回类型 `Blob`

## Base64转化为File

::: details 示例代码

```js
  import { base64ToBlob } from 'xs-utils';

  await base64ToBlob(base64Data)
```

:::

base64ToFile(base64Data): `File`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
base64Data | base64字符串 | string |

返回类型 `File`

## Blob流转化为Base64

::: details 示例代码

```js
  import { blobToBase64 } from 'xs-utils';

  await blobToBase64(blob)
```

:::

blobToBase64(blob): `Promise<string>`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
blob | blob对象 | Blob |

返回类型 `Promise<string>`

## Blob流转化为File

::: details 示例代码

```js
  import { blobToFile } from 'xs-utils';

  await blobToFile(blob)
```

:::

blobToFile(blob): `File`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
blob | blob对象 | Blob |

返回类型 `File`

## 二进制字符串转化为Blob

::: details 示例代码

```js
  import { binaryStringToBlob } from 'xs-utils';

  await binaryStringToBlob(binaryString)
```

:::

binaryStringToBlob(binaryString): `Blob`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
binaryString | 二进制字符串 | string |

返回类型 `Blob`

## 二进制数组转化为Blob

::: details 示例代码

```js
  import { arrayBufferToBlob } from 'xs-utils';

  await arrayBufferToBlob(arrayBuffer)
```

:::

arrayBufferToBlob(arrayBuffer): `Blob`

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
arrayBuffer | 二进制数组 | ArrayBuffer |

返回类型 `Blob`
