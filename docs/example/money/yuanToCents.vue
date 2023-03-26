<script setup lang="ts">
  import { yuanToCents } from '@jsxiaosi/utils';
</script>

<template>
  <div>
    {{ yuanToCents(12345.67) }}
  </div>
</template>
