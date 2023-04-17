<script setup lang="ts">
  import { objectToUrlParams, urlParamsToObject, appendUrlParams } from '@jsxiaosi/utils/index';

  const params = {
    name: 'John',
    age: 30,
    tags: ['a', 'b', 'c'],
  };
</script>

<template>
  <!-- <div ref="elEef" class="button show element"
    >{{ objectToUrlParams(params, 'comma') }}：{{ urlParamsToObject(objectToUrlParams(params, 'comma')) }}</div
  >
  <div ref="elEef" class="button show element"
    >{{ objectToUrlParams(params, 'brackets') }}：{{ urlParamsToObject(objectToUrlParams(params, 'brackets')) }}</div
  >
  <div ref="elEef" class="button show element"
    >{{ objectToUrlParams(params, 'indices') }}：{{ urlParamsToObject(objectToUrlParams(params, 'indices')) }}</div
  >
  <div ref="elEef" class="button show element"
    >{{ objectToUrlParams(params, 'repeat') }}：{{ urlParamsToObject(objectToUrlParams(params, 'repeat')) }}</div
  > -->
  <div ref="elEef" class="button show element"
    >{{ appendUrlParams('https://example.com/api/data?existingKey=existingValue', params, 'unnamed') }}：{{
      urlParamsToObject(appendUrlParams('https://example.com/api/data?existingKey=existingValue', params, 'unnamed'))
    }}</div
  >
  <div ref="elEef" class="button show element"
    >{{ objectToUrlParams(params, 'unnamed') }}：{{ urlParamsToObject('https://example.com/api/data') }}</div
  >
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
