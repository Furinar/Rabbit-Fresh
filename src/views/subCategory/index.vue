<script setup lang="ts">
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/category';
import type { categoryDTO, goodsList, subCategory } from '@/types/category';
import GoodItem from '../Home/components/GoodItem.vue';

const categoryFilter = ref<subCategory | null>(null);
const getCategoryFilter = async (id: string) => {
  const res = await getCategoryFilterAPI(id);
  categoryFilter.value = res.result;
};

const route = useRoute();


const subCategory = ref<goodsList | null>(null);
const requireData = ref<categoryDTO>({
  categoryId: Number(route.params.id),
  page: 1,
  pageSize: 20,
  sortField: 'publishTime',
})

const getSubCategory = async () => {
  const res = await getSubCategoryAPI(requireData.value);
  subCategory.value = res.result;
};

onMounted(() => {
  getSubCategory();
  getCategoryFilter(route.params.id as string);
});

watch(
  () => requireData.value.sortField
  , () => {
    getSubCategory();
  });

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/category/' + categoryFilter?.parentId }">{{ categoryFilter?.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryFilter?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


    <div class="sub-container">
      <el-tabs v-model="requireData.sortField">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <good-item v-for="item in subCategory?.items" :key="item.id" :good="item"></good-item>
      </div>
    </div>


  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
