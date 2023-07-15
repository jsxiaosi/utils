<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { setStyle, getStyle, removeStyle } from '@jsxiaosi/utils/index';

  const dome = ref<HTMLDivElement>();

  onMounted(async () => {
    const admin = document.getElementById('dome');
    console.log(admin?.style);
    // admin[0].style
  });

  const zhiwen = async () => {
    if (dome.value) {
      setStyle(dome.value, { display: 'block', textAlign: 'center' });
      removeStyle(dome.value, ['color']);
      console.log(getStyle(dome.value));
    }
  };
</script>

<template>
  <div>
    <div id="dome" ref="dome" class="dome" style="color: red"></div>
    <button @click="zhiwen">asdasasd</button>
  </div>
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

  .dome {
    width: 500px;
    height: 500px;
    background-color: red;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
