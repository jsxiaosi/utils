<script setup lang="ts">
  import { debounce } from '@jsxiaosi/utils';
  import { ElMessage } from 'element-plus';

  // 基础
  const deb = debounce(() => {
    ElMessage.success('执行一次');
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

  const onDebounceImmediateClick = () => {
    debImmediate();
  };

  // 带参数的防抖
  const debValue = debounce<(name: string) => void>((name) => {
    ElMessage.success(`执行一次带参数的 ${name}`);
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
      ElMessage.success(`执行一次异步函数`);

      return asyncValue();
    },
    500,
    false,
    (result) => {
      ElMessage.success(`通过callback获取异步回调的参数 ${result}`);
    },
  );

  const onDebounceAsyncClick = () => {
    debAsync();
  };
</script>

<template>
  <div>
    <ElButton @click="onDebounceClick">基础防抖</ElButton>
    <ElButton @click="onDebounceImmediateClick">立即执行防抖</ElButton>
    <ElButton @click="onDebounceValueClick">带参数的防抖</ElButton>
    <ElButton @click="onDebounceAsyncClick">获取返回值的防抖</ElButton>
  </div>
</template>
