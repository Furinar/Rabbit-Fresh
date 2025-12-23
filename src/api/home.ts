import axios from '@/utils/request';
import type { bannerItem, hotItem, newItem } from '@/types/home';
import type { ApiResponse } from '@/types/api';

function getBannerApi(): Promise<ApiResponse<bannerItem[]>> {
  return axios({
    url: '/home/banner',
    method: 'GET',
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

export { getBannerApi, getNewApi, getHotApi };
