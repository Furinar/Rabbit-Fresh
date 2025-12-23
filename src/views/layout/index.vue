<template>
  <layoutNav />
  <layoutHeader />
  <RouterView />
  <layoutFooter />
</template>

<script setup lang="ts">
import layoutFooter from './components/layoutFooter.vue';
import layoutNav from './components/layoutNav.vue';
import layoutHeader from './components/layoutHeader.vue';

</script>

<style scoped></style>
