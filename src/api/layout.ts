import axios from '@/utils/request';
import type { CategoryItem,} from '@/types/layout';
import type { ApiResponse } from '@/types/api';
/**
 * 获取分类列表
 * @returns 返回分类及商品列表
 */
function getCategoryApi(): Promise<ApiResponse<CategoryItem[]>> {
  return axios({
    url: '/home/category/head',
    method: 'GET',
  });
}

export { getCategoryApi };
