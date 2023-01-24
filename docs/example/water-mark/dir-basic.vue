<script setup lang="ts">
  import { ref } from '@vue/reactivity';
  const waterMarkText = ref<string>('指令水印');
</script>

<template>
  <ElInput v-model="waterMarkText"></ElInput>
  <div v-water-mark="waterMarkText" class="local-demo"> </div>
</template>

<style lang="scss" scoped>
  .local-demo {
    width: 100%;
    height: 300px;
    margin-top: 1.5rem;
    border: 1px dashed var(--vp-c-divider);
  }
</style>
