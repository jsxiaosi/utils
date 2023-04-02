---
outline: deep
---

# color

颜色装换工具

## hexToRgb

:::demo 十六进制颜色代码转RGB

color/hexToRgb

:::

::: details 示例代码

``` ts
import { hexToRgb } from '@jsxiaosi/utils';

hexToRgb('#409eff') // return {r:64, g:158, b:255}
```

:::

参数：

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
hex | 十六进制颜色代码 | string |

返回类型：`RGBColor`：

参数 | 说明 | 类型
---------|----------|---------
r | 红 | number |
g | 绿 | number |
b | 蓝 | number |

## rgbToHex

:::demo RGB转十六进制颜色代码

color/rgbToHex

:::

::: details 示例代码

``` ts
import { rgbToHex } from '@jsxiaosi/utils';

rgbToHex({ r: 64, g: 158, b: 255 }) // return #409eff
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
rgb | rgb对象 | `RGBColor` |

`RGBColor`:
参数 | 说明 | 类型
---------|----------|---------
r | 红 | number |
g | 绿 | number |
b | 蓝 | number |

返回类型：`string`

## rgbToHsl

:::demo RGB转HSL

color/rgbToHsl

:::

::: details 示例代码

``` ts
import { rgbToHsl } from '@jsxiaosi/utils';

rgbToHsl({ r: 64, g: 158, b: 255 }) // return {h:210.47 s:100 l:62.54}
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
rgb | rgb对象 | `RGBColor` |

`RGBColor`:
参数 | 说明 | 类型
---------|----------|---------
r | 红 | number |
g | 绿 | number |
b | 蓝 | number |

返回类型：`HSLColor`
参数 | 说明 | 类型
---------|----------|---------
h | 色相 | number |
s | 饱和度 | number |
l | 亮度 | number |

## hslToRgb

:::demo HEX转RGB

color/hslToRgb

:::

::: details 示例代码

``` ts
import { hslToRgb } from '@jsxiaosi/utils';

hslToRgb({ h: 210.47, s: 100, l: 62.54 }) // return {r:64, g:158, b:255}
```

:::

参数:

参数 | 说明 | 类型
---------|----------|---------
h | 色相 | number |
s | 饱和度 | number |
l | 亮度 | number |

返回类型：`RGBColor`：

参数 | 说明 | 类型
---------|----------|---------
r | 红 | number |
g | 绿 | number |
b | 蓝 | number |

## colorPalette

:::demo 调色板，主色加深或者变浅

color/colorPalette

:::

::: details 示例代码

``` ts
import { colorPalette } from '@jsxiaosi/utils';

colorPalette('#409eff', '#ffffff', 0.5) // return #a0cfff
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|--------- |---------
color | 主色 | string |
neutralColor | 中性色 | string |
weight | 调色深度，范围 0~1 | number |

返回类型：`string`：

## batchColorMatching

:::demo 生成阶梯色板 (只生成9个梯度)

color/batchColorMatching

:::

::: details 示例代码

``` ts
import { colorPalette } from '@jsxiaosi/utils';

batchColorMatching('#409eff', 'dark') 
// return ["#3c90e8","#3782d0","#3375b9","#2e67a1","#2a598a","#264b72","#213d5a","#1d3043","#18222b"]
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|--------- |---------
color | 主色 | string |
themeMode | 颜色加深或者变浅 | light / dark |

返回一个十六进制颜色字符串数组，类型`string[]`：
