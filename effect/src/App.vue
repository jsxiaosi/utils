<script setup lang="ts">
  import { throttle } from '@jsxiaosi/utils/index';

  const admin = (): Promise<string> => {
    return new Promise((rej) => {
      setTimeout(() => {
        rej('123123');
      }, 0);
    });
  };

  const dba = throttle<(name: string) => Promise<string>>(
    async (name: string) => {
      console.log('防抖', name);
      return await admin();
    },
    2000,
    (result) => {
      console.log('防抖的返回值', result);
    },
  );

  const debouncedLogChange = () => {
    dba('namename');
  };
</script>

<template>
  <button @click="debouncedLogChange">防抖</button>
</template>

<style>
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
