<script setup lang="ts">
  import { getBrowserInfo } from '@jsxiaosi/utils';

  const browserInfo = getBrowserInfo();
</script>

<template>
  <div>
    <div>浏览器名称：{{ browserInfo.browserName }}</div>
    <div>浏览器版本：{{ browserInfo.browserVersion }}</div>
    <div>系统环境：{{ browserInfo.operatingSystem }}</div>
  </div>
</template>
