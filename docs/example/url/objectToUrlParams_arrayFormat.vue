<script setup lang="ts">
  import { objectToUrlParams } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const params = {
    name: 'John',
    age: 30,
    tags: ['a', 'b', 'c'],
  };
  const options = ['brackets', 'indices', 'repeat', 'comma', 'unnamed'] as const;
  const arrayFormat = ref<(typeof options)[number]>('unnamed');

  const urlParams = ref<string>('');
</script>

<template>
  <div>{{ params }}</div>
  <ElSelect v-model="arrayFormat">
    <ElOption v-for="item in options" :key="item" :label="item" :value="item" />
  </ElSelect>

  <ElButton style="margin: 12px 0" @click="urlParams = objectToUrlParams(params, arrayFormat)">转换</ElButton>
  <div>{{ urlParams }}</div>
</template>
