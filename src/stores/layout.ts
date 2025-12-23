import { defineStore } from "pinia";
import { getCategoryApi } from '@/api/layout';
import { ref } from 'vue';
import type { CategoryItem } from '@/types/layout';

export const useLayoutStore = defineStore("layout", () => {

const categoryList = ref<CategoryItem[]>([]);

const getCategory = async () => {
  const res = await getCategoryApi();
  categoryList.value = res.result;
}
  return {
    categoryList,
    getCategory
  }
})
