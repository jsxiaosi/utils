<script setup lang="ts">
  import { centsToYuan } from '@jsxiaosi/utils';
</script>

<template>
  <div>
    {{ centsToYuan(1234567) }}
  </div>
</template>
