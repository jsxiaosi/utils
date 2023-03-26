<script setup lang="ts">
  import { toChineseUpper } from '@jsxiaosi/utils';
</script>

<template>
  <div>
    {{ toChineseUpper(123456789123.1234) }}
  </div>
  <div>
    {{ toChineseUpper(123456789.1234) }}
  </div>
  <div>
    {{ toChineseUpper(12345.67) }}
  </div>
  <div>
    {{ toChineseUpper(0) }}
  </div>
</template>
