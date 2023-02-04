<script setup lang="ts">
  import { downloadImage } from 'xs-utils';

  const downloadChange = () => {
    downloadImage('https://supercutexiaosi.top/resource/account_url.png', 'logo.png');
  };
</script>

<template>
  <div>
    <ElButton @click="downloadChange">下载图片</ElButton>
  </div>
</template>
