<template>
  <!-- <layoutFixed /> -->
  <layoutNav />
  <layoutHeader />
  <RouterView />
  <div style="height: 100px;"></div>
  <layoutFooter />
</template>

<script setup lang="ts">
// import layoutFixed from './components/layoutFixed.vue';
import layoutFooter from './components/layoutFooter.vue';
import layoutNav from './components/layoutNav.vue';
import layoutHeader from './components/layoutHeader.vue';
import { useLayoutStore } from '@/stores/layout';
import { onMounted } from 'vue';

const layoutStore = useLayoutStore();

onMounted(() => {
  layoutStore.getCategory();
});
</script>

<style scoped></style>
