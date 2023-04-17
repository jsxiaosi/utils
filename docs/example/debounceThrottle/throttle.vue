<script setup lang="ts">
  import { throttle } from '@jsxiaosi/utils';
  import { ElMessage } from 'element-plus';

  // 基础
  const deb = throttle(() => {
    ElMessage.success('2秒执行一次');
  }, 2000);

  const onThrottle = () => {
    deb();
  };

  // 带参数的节流
  const debValue = throttle<(name: string) => void>((name) => {
    ElMessage.success(`2秒执行一次带参数的 ${name}`);
  }, 2000);

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
      ElMessage.success(`2秒执行一次异步函数`);

      return asyncValue();
    },
    2000,
    (result) => {
      ElMessage.success(`1秒后通过callback获取异步回调的参数 ${result}`);
    },
  );

  const onThrottleAsync = () => {
    debAsync();
  };
</script>

<template>
  <div>
    <ElButton @click="onThrottle">基础节流</ElButton>
    <ElButton @click="onThrottleValue">带参数的节流</ElButton>
    <ElButton @click="onThrottleAsync">获取返回值的节流</ElButton>
  </div>
</template>
