<script setup lang="ts">
  import { hslToRgb } from '@jsxiaosi/utils';
  const rgb = hslToRgb({ h: 210.47, s: 100, l: 62.54 });
</script>

<template>
  <el-row align="middle">
    <div class="demo" style="background-color: hsl(210.47deg 100% 62.55%)">hsl(210.47 100% 62.55%)</div>
    <span>To</span>
    <div class="demo" :style="{ backgroundColor: `rgb(${rgb.r},${rgb.g},${rgb.b})` }">{{
      `rgb(${rgb.r},${rgb.g},${rgb.b})`
    }}</div>
  </el-row>
</template>

<style lang="scss" scoped>
  .demo {
    padding: 6px 12px;
  }
  span {
    margin: 0 12px;
  }
</style>
