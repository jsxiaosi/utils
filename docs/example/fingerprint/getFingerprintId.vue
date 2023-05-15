<script setup lang="ts">
  import { getFingerprintId } from '@jsxiaosi/utils';
  import { onMounted, ref } from 'vue';

  const fingerprintId = ref<string>('');
  onMounted(async () => {
    fingerprintId.value = await getFingerprintId();
  });
</script>

<template>
  <div>{{ fingerprintId }} </div>
</template>
