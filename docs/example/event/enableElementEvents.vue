<script setup lang="ts">
  import { enableElementEvents } from '@jsxiaosi/utils';
  import type { DisableElementEventType } from '@jsxiaosi/utils';

  const onChange = (eventType: DisableElementEventType[]) => {
    enableElementEvents(document.body, eventType);
  };
</script>

<template>
  <div>
    <ElButton @click="onChange(['contextmenu'])">恢复鼠标右击事件</ElButton>
    <ElButton @click="onChange(['copy'])">恢复复制事件</ElButton>
    <ElButton @click="onChange(['paste'])">恢复黏贴事件</ElButton>
    <ElButton @click="onChange(['select'])">恢复选择事件</ElButton>
    <ElButton @click="onChange(['contextmenu', 'copy', 'paste', 'select'])">恢复全部事件</ElButton>
  </div>
</template>
