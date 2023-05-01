<script setup lang="ts">
  import { getDeviceType } from '@jsxiaosi/utils';
</script>

<template>
  <div>
    <div>运行的设备类型：{{ getDeviceType() === 'Mobile' ? '移动端' : 'PC' }}</div>
  </div>
</template>
