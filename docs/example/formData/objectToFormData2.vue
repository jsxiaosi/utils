<script setup lang="ts">
  import { objectToFormData } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const showToast = ref<boolean>(false);

  const onTransformChange = () => {
    const formData = new FormData();
    formData.append('name', 'Alice');

    const obj = {
      age: 25,
    };

    showToast.value = true;
    objectToFormData(obj, formData);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
</script>

<template>
  <div>
    <div>
      FromData() = {name: 'Alice'}
      <br />
      <br />
      const obj = {
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;age: 25,
      <br />}
    </div>
    <br />
    <ElButton @click="onTransformChange">转换</ElButton>
    <ElText v-show="showToast" style="margin-left: 12px" type="danger">查看控制台</ElText>

    <!-- <span v-show="showToast" style="margin-left: 12px; color: red">查看控制台</span> -->
  </div>
</template>
