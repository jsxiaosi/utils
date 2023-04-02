<script setup lang="ts">
  import { stringTrim } from '@jsxiaosi/utils';
  import { ref } from 'vue';

  const text = ref<string>('   abc   def   ghi   ');

  const showToast = ref<boolean>(false);

  const onTransformChange = () => {
    showToast.value = !showToast.value;
  };
</script>

<template>
  <div>
    <ElButton @click="onTransformChange">{{ showToast ? '还原' : '转换' }}</ElButton>
    <ElText style="margin-left: 12px" type="danger">{{ showToast ? stringTrim(text) : text }}</ElText>
  </div>
</template>
