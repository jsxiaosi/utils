<script setup lang="ts">
  import { rgbToHsl } from '@jsxiaosi/utils';
  const hsl = rgbToHsl({ r: 64, g: 158, b: 255 });
</script>

<template>
  <el-row align="middle">
    <div class="demo" :style="{ backgroundColor: `rgb(64,158,255)` }">{{ `rgb(64,158,255)` }}</div>
    <span>To</span>
    <div class="demo" :style="{ backgroundColor: `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)` }">{{
      `hsl(${hsl.h.toFixed(2)} ${hsl.s}% ${hsl.l.toFixed(2)}%)`
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
