<script setup lang="ts">
  import { IndexedDBHelper } from '@jsxiaosi/utils/index';
  import { onMounted } from 'vue';

  interface MyDBSchema {
    users: { id: string; name: string; email: string };
    orders: { orderId: number; userId: string; product: string };
    // More stores...
  }

  onMounted(async () => {
    const dbManager = new IndexedDBHelper<MyDBSchema>('MyDatabase', 1, [
      { storeName: 'users', keyPath: 'id', indexConfigs: [{ indexName: 'name', keyPath: 'name' }] },
      { storeName: 'orders', keyPath: 'orderId', indexConfigs: [{ indexName: 'productId', keyPath: 'productId' }] },
    ]);

    dbManager.add('users', { id: '1', name: 'John Doe', email: '' });
    dbManager.add('orders', { orderId: 1, userId: 'product1', product: '' });
    dbManager.get('admin');
  });

  const zhiwen = async () => {};
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
