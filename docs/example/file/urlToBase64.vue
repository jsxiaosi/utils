<script setup lang="ts">
  import { ref } from 'vue';
  import { urlToBase64 } from '@jsxiaosi/utils';

  const urlSrc = ref<string>();

  const dataUrlToBase64 = async () => {
    urlSrc.value = await urlToBase64('https://supercutexiaosi.top/resource/account_url.png');
  };
</script>

<template>
  <div class="demos_content">
    <ElButton @click="dataUrlToBase64">url图片转成base64</ElButton>
    <ElImage class="image" :src="urlSrc"></ElImage>
  </div>
</template>

<style lang="scss" scoped>
  .image {
    margin-left: 12px;
  }
</style>
