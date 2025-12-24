import type { ApiResponse } from '@/types/api'
import type { category } from '@/types/category'
import axios from '@/utils/request'


function getCategoryApi(id: string):Promise<ApiResponse<category>>
{
  return axios({
    url: "/category",
    method: "GET",
    params: {
      id
    }
  })
}


export {
  getCategoryApi
}
