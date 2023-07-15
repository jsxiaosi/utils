<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { openFullScreen, closeFullScreen } from '@jsxiaosi/utils/index';

  const dome = ref<HTMLDivElement>();

  onMounted(async () => {
    const admin = document.getElementById('dome');
    console.log(admin?.style);
    // admin[0].style
  });

  const zhiwen = async () => {
    if (dome.value) {
      openFullScreen();
    }
  };
</script>

<template>
  <div>
    <div id="dome" ref="dome" class="dome" style="color: red">
      <button @click="closeFullScreen">close</button>
    </div>
    <button @click="zhiwen">open</button>
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
