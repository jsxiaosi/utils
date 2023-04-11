<script setup lang="ts">
  import { mask } from '@jsxiaosi/utils';
</script>

<template>
  <div> {{ mask('123456789', 3, 7, '#') }} </div>
</template>
