<script setup lang="ts">
  import { TabCommunicator } from '@jsxiaosi/utils/index';
  import { onMounted } from 'vue';

  const tabComm = new TabCommunicator<{ event1: string; event2: { name: string } }>('keystring');

  const tabComm2: TabCommunicator = new TabCommunicator('keystring2');

  onMounted(async () => {
    tabComm.on('event1', (data) => {
      console.log('event1', data);
    });
    tabComm.on('event2', (data) => {
      console.log('event2', data);
    });

    tabComm2.on('event1', (data) => {
      console.log('tabComm2event1', data);
    });
    tabComm2.on('event2', (data) => {
      console.log('tabComm2event2', data);
    });
  });

  const zhiwen = async () => {
    tabComm.emit('event1', '123');
    tabComm.emit('event2', { name: 'name' });

    // tabComm.destroy();
  };
</script>

<template>
  <div @click="zhiwen">push</div>
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
