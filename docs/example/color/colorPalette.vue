<script setup lang="ts">
  import { colorPalette } from '@jsxiaosi/utils';
  import { ref } from 'vue';
  const mainColor = '#409eff';
  const color = ref(mainColor);
  const linColor = ref(mainColor);
</script>

<template>
  <el-row align="middle">
    <div class="demo" :style="{ backgroundColor: color }"></div>
    <!-- <div class="demo" :style="{ backgroundColor: color }">加深</div> -->
    <el-button
      @click="
        () => {
          color = color === mainColor ? colorPalette(color, '#141414', 0.5) : mainColor;
        }
      "
      >{{ color === mainColor ? '加深' : '还原' }}</el-button
    >
  </el-row>
  <el-row align="middle">
    <div class="demo" :style="{ backgroundColor: linColor }"></div>
    <!-- <div class="demo" :style="{ backgroundColor: color }">加深</div> -->
    <el-button
      @click="
        () => {
          linColor = linColor === mainColor ? colorPalette(linColor, '#ffffff', 0.5) : mainColor;
        }
      "
      >{{ linColor === mainColor ? '变浅' : '还原' }}</el-button
    >
  </el-row>
</template>

<style lang="scss" scoped>
  .demo {
    width: 25px;
    height: 25px;
    padding: 6px 12px;
    margin-right: 12px;
  }
  span {
    margin: 0 12px;
  }
</style>
