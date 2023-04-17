<script setup lang="ts">
  import { appendUrlParams } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const params = {
    name: 'John',
    age: 30,
    tags: ['a', 'b', 'c'],
  };

  const urlParams = ref<string>('https://github.com/jsxiaosi?existingKey=existingValue');
</script>

<template>
  <div>{{ params }}</div>
  <ElButton
    style="margin: 12px 0"
    @click="urlParams = appendUrlParams('https://github.com/jsxiaosi?existingKey=existingValue', params, 'unnamed')"
    >追加参数
  </ElButton>
  <div>{{ urlParams }}</div>
</template>
