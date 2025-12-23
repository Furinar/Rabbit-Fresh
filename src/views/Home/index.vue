<script setup lang="ts">
import HomeCategory from '@/views/Home/components/category.vue'
import HomeBanner from '@/views/Home/components/banner.vue'
import HomeNew from '@/views/Home/components/new.vue'
import HomeHot from '@/views/Home/components/hot.vue'
import HomeProduct from '@/views/Home/components/product.vue'
import panel from '@/views/Home/components/panel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

  <panel title="新鲜好物">

  </panel>

  <panel title="人气推荐">

  </panel>
</template>
