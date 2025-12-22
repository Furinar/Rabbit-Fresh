<template>
  <div class="app">
    <el-button type="danger" :icon="Delete" circle></el-button>
    <el-button type="primary" round>Primary</el-button>
  </div>
</template>

<script setup lang="ts" name="App">
import { Delete } from '@element-plus/icons-vue'
</script>

<style scoped></style>
