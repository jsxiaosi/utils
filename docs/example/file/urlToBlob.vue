<script setup lang="ts">
  import { ref } from 'vue';
  import { urlToBlob, blobToBase64 } from '@jsxiaosi/utils';

  const urlSrc = ref<string>();

  const dataUrlToBase64 = () => {
    urlToBlob('https://supercutexiaosi.top/resource/account_url.png').then((blob) => {
      blobToBase64(blob).then((base64) => {
        urlSrc.value = base64;
      });
    });
  };
</script>

<template>
  <div class="demos_content">
    <ElButton @click="dataUrlToBase64">url转Blob</ElButton>
    <ElImage class="image" :src="urlSrc"></ElImage>
  </div>
</template>

<style lang="scss" scoped>
  .image {
    margin-left: 12px;
  }
</style>
