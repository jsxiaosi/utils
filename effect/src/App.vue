<script setup lang="ts">
  import { isDateTimeInRange, parseDate } from '@jsxiaosi/utils/index';

  const dateRange = '12:00:00-15:00:00';
  const date = '12:33:22';

  // 示例
  const date1 = '2023/4/21 12:11:33';
  const date2 = '2023-11-1 12:11:33.123';
  console.log(parseDate(date1)); // 输出：Thu Apr 21 2023 12:33:22 GMT+0800 (中国标准时间)
  console.log(parseDate(date2)); // 输出：Thu Apr 21 2023 12:33:22 GMT+0800 (中国标准时间)

  // console.log(parseDate(date2).toString());
  // console.log(isDateTimeInRange('12:00:00.100-15:00:00.000', '12:00:00.100')); // true
  // console.log(isDateTimeInRange('12:00:00-15:00:00', '2023-04-21 12:33:22.123')); // true
  // console.log(isDateTimeInRange('12:00:00.000-15:00:00.000', '2023-04-21 12:33:22')); // true

  console.log(
    isDateTimeInRange('12:00-15:00', '12:00'), // true
    isDateTimeInRange('12:00-15:00', '15:01'), // false

    isDateTimeInRange('12:00-15:00', '12'), // true
    isDateTimeInRange('12:00-15:00', '15'), // true
  );
</script>

<template>
  <div>{{ isDateTimeInRange(dateRange, date) }}</div>
</template>

<style>
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
