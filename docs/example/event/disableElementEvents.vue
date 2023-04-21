<script setup lang="ts">
  import { disableElementEvents } from '@jsxiaosi/utils';
  import type { DisableElementEventType } from '@jsxiaosi/utils';

  const onChange = (eventType: DisableElementEventType[]) => {
    disableElementEvents(document.body, eventType);
  };
</script>

<template>
  <div>
    <ElButton @click="onChange(['contextmenu'])">禁用右击事件</ElButton>
    <ElButton @click="onChange(['copy'])">禁用复制事件</ElButton>
    <ElButton @click="onChange(['paste'])">禁用黏贴事件</ElButton>
    <ElButton @click="onChange(['select'])">禁用选择事件</ElButton>
    <ElButton @click="onChange(['contextmenu', 'copy', 'paste', 'select'])">禁用全部事件</ElButton>
  </div>
</template>
