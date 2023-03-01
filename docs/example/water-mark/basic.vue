<script lang="ts" setup>
  import { useWaterMark } from 'xs-utils-vue';
  const { setWaterMark, close } = useWaterMark();
</script>

<template>
  <ElButton @click="() => setWaterMark('xs-utils-vue-demo')">全局</ElButton>
  <ElButton @click="() => close()">清除</ElButton>
</template>
