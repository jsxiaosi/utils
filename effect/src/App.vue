<script setup lang="ts">
  import { objectToFormData, mergeFormData, isWord } from '@jsxiaosi/utils/index';
  import { ref, onMounted } from 'vue';

  const elEef = ref<HTMLDivElement>();
  onMounted(() => {
    const obj = {
      name: 'Alice',
      age: 25,
      contact: {
        email: 'alice@example.com',
        phone: '1234567890',
      },
      hobbies: ['reading', 'hiking'],
    };

    const formData = objectToFormData(obj);
    const formData2 = new FormData();
    formData2.append('souce', 'yes????');
    mergeFormData(formData, formData2);
    console.log('formData', formData.values());
    for (const value of formData.values()) {
      console.log(value);
    }

    for (const key of formData.keys()) {
      console.log(key);
    }

    // console.log(formData.get('name')); // 'Alice'
    // console.log(formData.get('age')); // '25'
    // console.log(formData.get('contact[email]')); // 'alice@example.com'
    // console.log(formData.get('contact[phone]')); // '1234567890'
    // console.log(formData.get('hobbies[0]')); // 'reading'
    // console.log(formData.get('hobbies[1]')); // 'hiking'
  });
</script>

<template>
  <div ref="elEef" class="button show element">{{ isWord('admib.doc') }}</div>

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
