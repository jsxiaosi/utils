---
outline: deep
---

# 防抖节流

## debounce`<T>`

:::demo 防抖函数

debounceThrottle/debounce

:::

::: details 示例代码

``` ts
  import { debounce } from '@jsxiaosi/utils';

  // 基础
  const deb = debounce(() => {
    console.log('执行一次 500毫秒');
  }, 500);

  const onDebounceClick = () => {
    deb();
  };

   // 立即执行
  const debImmediate = debounce(
    () => {
      ElMessage.success('立刻执行一次');
    },
    500,
    true,
  );

    // 带参数的防抖
  const debValue = debounce<(name: string) => void>((name) => {
    console.log(`执行一次带参数的 ${name}`);
  }, 500);

  const onDebounceValueClick = () => {
    debValue('jsxiaosi');
  };


  // 获取返回值
  const asyncValue = (): Promise<string> => {
    return new Promise((rej) => {
      setTimeout(() => {
        rej('我是异步的');
      }, 500);
    });
  };

  const debAsync = debounce<() => Promise<string>>(
    () => {
      console.log(`执行一次异步函数`);

      return asyncValue();
    },
    500,
    (result) => {
      console.log(`通过callback获取异步回调的参数 ${result}`);
    },
  );

  const onDebounceAsyncClick = () => {
    debAsync();
  };
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
func | 需要防抖处理的函数 | `T extends  (...args: any[]) => any` |
wait | 防抖的时间间隔（毫秒） | number |
immediate | 立即执行：点击按钮先执行而不是先等待防抖时间 | boolean
callback | 获取需要防抖函数的返回值 |  `(result: ReturnType<T>) => void`|

返回类型：`(...args: any[]) => void`

## throttle`<T>`

:::demo 节流函数

debounceThrottle/throttle

:::

::: details 示例代码

``` ts
  import { throttle } from '@jsxiaosi/utils';

  // 基础
  const deb = throttle(() => {
    console.log('执行一次');
  }, 1000);

  const onThrottle = () => {
    deb();
  };

  // 带参数的节流
  const debValue = throttle<(name: string) => void>((name) => {
    console.log(`执行一次带参数的 ${name}`);
  }, 1000);

  const onThrottleValue = () => {
    debValue('jsxiaosi');
  };

  // 获取返回值
  const asyncValue = (): Promise<string> => {
    return new Promise((rej) => {
      setTimeout(() => {
        rej('我是异步的');
      }, 1000);
    });
  };

  const debAsync = throttle<() => Promise<string>>(
    () => {
      console.log(`执行一次异步函数`);

      return asyncValue();
    },
    1000,
    (result) => {
      console.log(`通过callback获取异步回调的参数 ${result}`);
    },
  );

  const onThrottleAsync = () => {
    debAsync();
  };
```

:::

参数:

参数 | 说明 | 类型 | 默认值
---------|----------|---------|---------
func | 需要防抖处理的函数 | `T extends  (...args: any[]) => any` |
wait | 防抖的时间间隔（毫秒） | number |
callback | 获取需要防抖函数的返回值 |  `(result: ReturnType<T>) => void`|

返回类型：`(...args: any[]) => void`
