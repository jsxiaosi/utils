<script setup lang="ts">
  import { useWaterMark } from 'xs-vue-utils';
  import { ref } from 'vue';

  const dom = ref<HTMLElement | undefined>();
  const { setWaterMark, close } = useWaterMark(dom);
</script>

<template>
  <div>
    <ElButton @click="() => setWaterMark('xs-vue-utils-demo')">生成水印</ElButton>
    <ElButton @click="() => close()">清除水印</ElButton>
  </div>
  <div id="dom" ref="dom" class="local-demo"> </div>
</template>

<style lang="scss" scoped>
  .local-demo {
    width: 100%;
    height: 300px;
    margin-top: 1.5rem;
    border: 1px dashed var(--vp-c-divider);
  }
</style>
