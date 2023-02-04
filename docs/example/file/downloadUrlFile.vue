<script setup lang="ts">
  import { downloadUrlFile } from 'xs-utils';

  const downloadPDF = () => {
    downloadUrlFile('https://supercutexiaosi.top/resource/develop_pdf.pdf', 'develop_pdf.pdf');
  };

  const downloadDocx = () => {
    downloadUrlFile('https://supercutexiaosi.top/resource/develop_docx.docx', 'develop_docx.docx');
  };
</script>

<template>
  <div>
    <ElButton @click="downloadPDF">下载PDF</ElButton>
    <ElButton @click="downloadDocx">下载Docx</ElButton>
  </div>
</template>
