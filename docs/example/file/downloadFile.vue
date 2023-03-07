<script setup lang="ts">
  import { urlToBlob, downloadFile } from 'xs-vue-utils';

  const dataUrlToBase64 = () => {
    urlToBlob('https://supercutexiaosi.top/resource/account_url.png').then((blob) => {
      downloadFile(blob, 'account.png');
    });
  };
</script>

<template>
  <div class="content">
    <ElButton @click="dataUrlToBase64">保存文件到本地</ElButton>
  </div>
</template>
