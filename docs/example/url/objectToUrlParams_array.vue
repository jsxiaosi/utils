<script setup lang="ts">
  import { objectToUrlParams } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const params = ['a', 'b', 'c'];

  const urlParams = ref<string>('');
</script>

<template>
  <div>{{ params }}</div>
  <ElButton style="margin: 12px 0" @click="urlParams = objectToUrlParams(params)">转换</ElButton>
  <div>{{ urlParams }}</div>
</template>
