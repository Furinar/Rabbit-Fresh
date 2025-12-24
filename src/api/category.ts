import type { ApiResponse } from '@/types/api'
import type { category, subCategory } from '@/types/category'
import axios from '@/utils/request'


function getCategoryApi(id: string): Promise<ApiResponse<category>> {
  return axios({
    url: "/category",
    method: "GET",
    params: {
      id
    }
  })
}

function getCategoryFilterAPI(id: string): Promise<ApiResponse<subCategory>> {
  return axios({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
export {
  getCategoryApi,
  getCategoryFilterAPI
}
