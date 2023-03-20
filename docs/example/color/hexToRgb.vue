<script setup lang="ts">
  import { hexToRgb } from '@jsxiaosi/utils';
  const rgb = hexToRgb('#409eff');
</script>

<template>
  <el-row align="middle">
    <div class="demo" style="background-color: #409eff">#409eff</div>
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
