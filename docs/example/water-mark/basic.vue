<script lang="ts" setup>
  import { useWaterMark } from 'xs-vue-utils';
  const { setWaterMark, close } = useWaterMark();
</script>

<template>
  <ElButton @click="() => setWaterMark('xs-vue-utils-demo')">全局</ElButton>
  <ElButton @click="() => close()">清除</ElButton>
</template>
