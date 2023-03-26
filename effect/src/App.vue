<script setup lang="ts">
  import { hasClass, addClass, removeClass, toChineseUpper } from '@jsxiaosi/utils/index';
  import { ref, onMounted } from 'vue';

  const elEef = ref<HTMLDivElement>();
  onMounted(() => {
    console.log(hasClass(elEef.value!, 'button'));
    console.log(addClass(elEef.value!, 'button2 button3 button4'));
    console.log(removeClass(elEef.value!, 'button2 button4 button3'));
  });
</script>

<template>
  <div ref="elEef" class="button show element">{{ toChineseUpper(1034567890) }}</div>
  <!-- <div ref="elEef" class="button show element">{{ toChineseUpper(100000000) }}</div>
  <div ref="elEef" class="button show element">{{ toChineseUpper(10345) }}</div>
  <div ref="elEef" class="button show element">{{ toChineseUpper(101.6511) }}</div>
  <div ref="elEef" class="button show element">{{ toChineseUpper(0) }}</div>
  <div ref="elEef" class="button show element">{{ toChineseUpper(0.6511) }}</div> -->
</template>

<style>
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
