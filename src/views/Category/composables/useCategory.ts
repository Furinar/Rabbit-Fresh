import { getCategoryApi } from '@/api/category';
import type { category } from '@/types/category';
import { ref } from 'vue';

export default function useCategory() {
  const category = ref<category>({
    id: '',
    name: '',
    picture: null,
    children: null
  });

  const route = useRoute();

  const getCategory = async (id: string = route.params.id as string) => {
    const res = await getCategoryApi(id);
    category.value = res.result;
  }

  return {
    category,
    getCategory
  }
}
