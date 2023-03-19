<script setup lang="ts">
  import { addClass } from '@jsxiaosi/utils';
  import { ref } from 'vue';
  const divRef = ref<HTMLDivElement>();
</script>

<template>
  <el-row>
    <div ref="divRef"></div>
    <ElButton @click="() => addClass(divRef!, 'demo')">添加class</ElButton>
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
