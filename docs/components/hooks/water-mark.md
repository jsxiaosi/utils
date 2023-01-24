---
outline: deep
---

# useWaterMark

通过useWaterMark可为全局dom或者指定的Dom添加水印，内置[`v-water-mark`](/components/directive/water-mark)指令，可通过指令的方式添加为局部Dom添加水印，[`详情指令文档`](/components/directive/water-mark)~！

## 全局水印

:::demo

water-mark/basic

:::

## 局部水印

:::demo 传入指定的Dom生成局部水印

water-mark/local

:::

## 参数

### useWaterMark(dom,options)

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
dom | 指定生成的水印的dom元素 | `Ref<HTMLElement>` | document.body
options| 水印参数配置，具体属性配置看下方：WaterMarkOptions | [WaterMarkOptions](water-mark.html#watermarkoptions) |

### WaterMarkOptions

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
width | 宽度 | number | 240
height| 高度 | number | 100
rotate| 旋转角度 | number |
fontSize| 文字大小 | string | 14px
textAlign | 对齐方向 | CanvasTextAlign | left
fillStyle | 文字颜色 | string | #b4b4b44d

### 导出方法

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
setWaterMark | 设置并生成水印 | (text) => void |
close | 清楚水印 | () => void |

### setWaterMark

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
text | 设置水印文字 | string |
