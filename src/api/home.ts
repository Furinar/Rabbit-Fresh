import axios from '@/utils/request';
import type { bannerItem, hotItem, newItem, projectItem } from '@/types/home';
import type { ApiResponse } from '@/types/api';

function getBannerApi(distributionSite:string='1'): Promise<ApiResponse<bannerItem[]>> {
  return axios({
    url: '/home/banner',
    method: 'GET',
    params: {
      distributionSite
    }
  })
}

function getNewApi(): Promise<ApiResponse<newItem[]>> {
  return axios({
    url: '/home/new',
    method: 'GET',
  })
}

function getHotApi():Promise<ApiResponse<hotItem[]>> {
  return axios({
    url: '/home/hot',
    method: 'GET',
  })
}

function getProjectApi():Promise<ApiResponse<projectItem[]>> {
  return axios({
    url: '/home/goods',
    method: 'GET',
  })
}
export { getBannerApi, getNewApi, getHotApi, getProjectApi };
