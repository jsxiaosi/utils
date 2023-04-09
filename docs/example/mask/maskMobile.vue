<script setup lang="ts">
  import { maskMobile } from '@jsxiaosi/utils';
</script>

<template>
  <div> {{ maskMobile('12345678901', '-') }} </div>
</template>
