<script setup lang="ts">
  import { maskEmail } from '@jsxiaosi/utils';
</script>

<template>
  <div> {{ maskEmail('abcdefghi@gmail.com') }} </div>
</template>
