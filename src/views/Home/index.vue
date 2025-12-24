<script setup lang="ts">
import HomeCategory from '@/views/Home/components/category.vue'
import HomeBanner from '@/views/Home/components/banner.vue'
import HomeNew from '@/views/Home/components/new.vue'
import HomeHot from '@/views/Home/components/hot.vue'
import HomeProduct from '@/views/Home/components/product.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>
