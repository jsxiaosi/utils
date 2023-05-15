<script setup lang="ts">
  import type { FingerprintInfo } from '@jsxiaosi/utils';
  import { getAllFingerprintInfo } from '@jsxiaosi/utils';
  import { onMounted, ref } from 'vue';

  const fingerprintInfo = ref<FingerprintInfo | null>(null);
  onMounted(async () => {
    fingerprintInfo.value = await getAllFingerprintInfo();
  });
</script>

<template>
  <div class="info">
    <pre>{{ JSON.stringify(fingerprintInfo, null, 2) }} </pre>
  </div>
</template>

<style lang="scss" scoped>
  .info {
    width: 100%;
    pre {
      max-width: 100%;
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
</style>
