<script setup lang="ts">
  import { batchColorMatching } from '@jsxiaosi/utils';
  import { ref } from 'vue';
  const mainColor = '#409eff';
  const lightColor = ref(batchColorMatching(mainColor, 'light'));
  const darkColor = ref(batchColorMatching(mainColor, 'dark'));
  console.log('darkColor', darkColor);
</script>

<template>
  <el-row align="middle">
    <div v-for="item in lightColor" :key="item" class="demo" :style="{ backgroundColor: item }"></div>
  </el-row>
  <el-row align="middle" style="margin-top: 12px">
    <div v-for="item in darkColor" :key="item" class="demo" :style="{ backgroundColor: item }"></div>
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
