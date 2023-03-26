<script setup lang="ts">
  import { formatDecimal } from '@jsxiaosi/utils';
</script>

<template>
  <div>
    {{ formatDecimal(12345.6789, 2) }}
  </div>
</template>
