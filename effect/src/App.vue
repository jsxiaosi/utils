<script setup lang="ts">
  import { parseDate, parseDateTime } from '@jsxiaosi/utils/index';

  const date = parseDate('2022//');
  console.log(date); // 输出：Thu Apr 21 2023 12:33:22 GMT+0800 (中国标准时间)

  console.log(parseDateTime(''));

  // console.log(parseDate(date2).toString());
  // console.log(isDateTimeInRange('12:00:00.100-15:00:00.000', '12:00:00.100')); // true
  // console.log(isDateTimeInRange('12:00:00-15:00:00', '2023-04-21 12:33:22.123')); // true
  // console.log(isDateTimeInRange('12:00:00.000-15:00:00.000', '2023-04-21 12:33:22')); // true
</script>

<template>
  <div></div>
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
