<script setup lang="ts">
  import { downloadImage } from '@jsxiaosi/utils';

  const downloadChange = () => {
    downloadImage('https://supercutexiaosi.top/resource/account_url.png', 'logo.png');
  };
</script>

<template>
  <div>
    <ElButton @click="downloadChange">下载图片</ElButton>
  </div>
</template>
