<script setup lang="ts">
  import { vWaterMark } from 'xs-vue-utils';
  const vMyWaterMark = vWaterMark;
</script>

<template>
  <div v-my-water-mark="'按需引入'" class="local-demo"> </div>
</template>

<style lang="scss" scoped>
  .local-demo {
    width: 100%;
    height: 300px;
    border: 1px dashed var(--vp-c-divider);
  }
</style>
