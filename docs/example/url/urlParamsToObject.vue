<script setup lang="ts">
  import { urlParamsToObject } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const urlParams = ref<any>();
</script>

<template>
  <div>https://github.com/jsxiaosi?name=John&age=30&tags[]=a&tags[]=b&tags[]=c</div>
  <ElButton
    style="margin: 12px 0"
    @click="urlParams = urlParamsToObject('https://github.com/jsxiaosi?name=John&age=30&tags[]=a&tags[]=b&tags[]=c')"
  >
    解析Url参数
  </ElButton>
  <div>{{ urlParams }}</div>
</template>
