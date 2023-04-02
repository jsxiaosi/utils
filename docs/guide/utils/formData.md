---
outline: deep
---

# FormData

## objectToFormData

:::demo 将对象转换成FormData

formData/objectToFormData

:::

::: details 示例代码

```js
  import { objectToFormData } from '@jsxiaosi/utils';

  const obj = {
    name: 'Alice',
    age: 25,
    contact: {
      email: 'alice@example.com',
      phone: '1234567890',
    },
    hobbies: ['reading', 'hiking'],
  };

  const formData = objectToFormData(obj) // FormData
```

:::

:::demo 在原有的formData添加对象属性

formData/objectToFormData2

:::

::: details 示例代码

```js
  import { objectToFormData } from '@jsxiaosi/utils';

  const formData = new FormData();
  formData.append('name', 'Alice');

  const obj = {
    age: 25,
  };

  showToast.value = true;
  objectToFormData(obj, formData);
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
obj | 转换的对象 | T |
outFormData | 需要添加数据的FormData，不传默认生成一个FormData返回 | FormData | FormData

返回类型：`FormData`

## mergeFormData

合并两个FormData，将来源FormData合并到目标FormData

::: details 示例代码

```js
  import { objectToFormData } from '@jsxiaosi/utils';

  const formData = new FormData();
  formData.append('name', 'Alice');

    const formData2 = new FormData();
  formData2.append('age', 25);

  mergeFormData(formData,formData2)
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
targetFormData | 目标FormData | FormData |
sourceFormData | 来源FormData | FormData |

返回类型：`FormData`
