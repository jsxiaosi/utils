<script setup lang="ts">
  import { removeClass } from '@jsxiaosi/utils';
  import { ref } from 'vue';
  const divRef = ref<HTMLDivElement>();
</script>

<template>
  <el-row>
    <div ref="divRef" class="demo"></div>
    <ElButton @click="() => removeClass(divRef!, 'demo')">删除class</ElButton>
  </el-row>
</template>

<style lang="scss" scoped>
  .demo {
    width: 32px;
    height: 32px;
    background-color: #409eff;
    margin-right: 12px;
  }
</style>
