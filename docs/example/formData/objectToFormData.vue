<script setup lang="ts">
  import { objectToFormData } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const showToast = ref<boolean>(false);

  const onTransformChange = () => {
    const obj = {
      name: 'Alice',
      age: 25,
      contact: {
        email: 'alice@example.com',
        phone: '1234567890',
      },
      hobbies: ['reading', 'hiking'],
    };

    showToast.value = true;
    const formData = objectToFormData(obj);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
</script>

<template>
  <div>
    <div>
      {
      <br />
      name: 'Alice',
      <br />
      age: 25,
      <br />
      contact: { email: 'alice@example.com', phone: '1234567890', },
      <br />
      hobbies: ['reading', 'hiking']
      <br />}
    </div>
    <br />
    <ElButton @click="onTransformChange">转换</ElButton>
    <ElText v-show="showToast" style="margin-left: 12px" type="danger">在控制台查看遍历的formData数据</ElText>

    <!-- <span v-show="showToast" style="margin-left: 12px; color: red">查看控制台</span> -->
  </div>
</template>
