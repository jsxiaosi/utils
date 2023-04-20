<script setup lang="ts">
  import { disableElementEvents } from '@jsxiaosi/utils/index';
  import { onMounted } from 'vue';

  onMounted(() => {
    // disableElementEvents(document.getElementById('input'), ['contextmenu', 'copy']);

    setTimeout(() => {
      // enableEvents(document.body, ['contextmenu', 'copy']);
    }, 2000);
  });

  const onChange = () => {
    disableElementEvents(document.body, ['contextmenu', 'copy', 'paste']);
  };
</script>

<template>
  <button @click="onChange">防抖</button>
  <input id="input" />
  <div>textkajsfakjsdfhjashfjsdfhj</div>
</template>

<style>
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
