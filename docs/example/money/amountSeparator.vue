<script setup lang="ts">
  import { amountSeparator } from '@jsxiaosi/utils';
</script>

<template>
  <div>
    {{ amountSeparator(123456789) }}
  </div>
</template>
