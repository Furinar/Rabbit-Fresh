import type { ApiResponse } from '@/types/api'
import type { category, categoryDTO, goodsList, subCategory } from '@/types/category'
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

const getSubCategoryAPI = (data: categoryDTO): Promise<ApiResponse<goodsList>> => {
  return axios({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
export {
  getCategoryApi,
  getCategoryFilterAPI,
  getSubCategoryAPI
}
