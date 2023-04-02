---
outline: deep
---

# 文件流转换

## 下载图片

:::demo 通过图片地址下载图片

file/downloadUrlImage

:::

::: details 示例代码

```js
  import { downloadImage } from '@jsxiaosi/utils';

  downloadImage('https://supercutexiaosi.top/resource/account_url.png', 'logo.png')
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 图片地址 | string |
fileName | 保存文件的名称 | string |
fileType | 保存图片的类型 | string | image/png

## 下载文件

:::demo 通过文件地址下载文件

file/downloadUrlFile

:::

::: details 示例代码

```js
  import { downloadUrlFile } from '@jsxiaosi/utils';

  downloadUrlFile('https://supercutexiaosi.top/resource/develop_pdf.pdf', 'develop_pdf.pdf');
```

:::

参数:

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

::: details 示例代码

```js
  import { urlToBase64 } from '@jsxiaosi/utils';

  const base64 = await urlToBase64('https://supercutexiaosi.top/resource/account_url.png');
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 图片地址 | string |
fileType | 图片的类型 | string | image/png

## url转Blob

:::demo

file/urlToBlob

:::

::: details 示例代码

```js
  import { urlToBlob } from '@jsxiaosi/utils';

  const blob = await urlToBlob('https://supercutexiaosi.top/resource/account_url.png');
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
url | 图片地址 | string |
requestOption | 发送请求参数 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/body) |

## 保存文件到本地

:::demo

file/downloadFile

:::

::: details 示例代码

```js
  import { downloadFile } from '@jsxiaosi/utils';

  downloadFile(data, 'account.png');
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
data | blob对象 | Blob |
fileName | 保存文件的名称 | string |
fileType | blob中的数组内容的MIME类型 | BlobPropertyBag['type'] | application/octet-stream

## File转化为Base64

::: details 示例代码

```js
  import { fileToBase64 } from '@jsxiaosi/utils';

  await fileToBase64(file)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
file | file对象 | File |

返回类型： `Promise<string>` 一个base64字符串

## File转化为二进制字符串

::: details 示例代码

```js
  import { fileToBinaryString } from '@jsxiaosi/utils';

  await fileToBinaryString(file)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
file | file对象 | File |

返回类型： `Promise<string>` 一个二进制字符串

## File转化为二进制数组

::: details 示例代码

```js
  import { fileToArrayBuffer } from '@jsxiaosi/utils';

  await fileToArrayBuffer(file)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
file | file对象 | File |

返回类型： `Promise<ArrayBuffer>` 一个二进制数组

## Base64转化为Blob流

::: details 示例代码

```js
  import { base64ToBlob } from '@jsxiaosi/utils';

  await base64ToBlob(base64Data)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
base64Data | base64字符串 | string |

返回类型： `Blob`

## Base64转化为File

::: details 示例代码

```js
  import { base64ToBlob } from '@jsxiaosi/utils';

  await base64ToBlob(base64Data)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
base64Data | base64字符串 | string |

返回类型： `File`

## Blob流转化为Base64

::: details 示例代码

```js
  import { blobToBase64 } from '@jsxiaosi/utils';

  await blobToBase64(blob)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
blob | blob对象 | Blob |

返回类型： `Promise<string>`

## Blob流转化为File

::: details 示例代码

```js
  import { blobToFile } from '@jsxiaosi/utils';

  await blobToFile(blob)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
blob | blob对象 | Blob |

返回类型： `File`

## 二进制字符串转化为Blob

::: details 示例代码

```js
  import { binaryStringToBlob } from '@jsxiaosi/utils';

  await binaryStringToBlob(binaryString)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
binaryString | 二进制字符串 | string |

返回类型： `Blob`

## 二进制数组转化为Blob

::: details 示例代码

```js
  import { arrayBufferToBlob } from '@jsxiaosi/utils';

  await arrayBufferToBlob(arrayBuffer)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
arrayBuffer | 二进制数组 | ArrayBuffer |

返回类型： `Blob`
