<script setup lang="ts">
import { getBannerApi } from '@/api/home';
import type { bannerItem } from '@/types/home';

const props = defineProps<{
  distributionSite: string
}>();
const { distributionSite } = props;
const bannerList = ref<bannerItem[]>([]);
const getBanner = async () => {
  const res = await getBannerApi(props.distributionSite);
  bannerList.value = res.result;
}

onMounted(() => {
  getBanner();
});
</script>



<template>
  <div class="home-banner" :class="`distribution-site-${distributionSite}`">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  left: 0;
  top: 0;

  &.distribution-site-1 {
    z-index: 98;
    position: absolute;
  }

  &.distribution-site-2 {
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
