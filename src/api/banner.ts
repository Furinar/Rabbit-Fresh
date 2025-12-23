import axios from '@/utils/request';
import type { bannerItem } from '@/types/banner';
import type { ApiResponse } from '@/types/api';

function getBannerApi(): Promise<ApiResponse<bannerItem[]>> {
  return axios({
    url: '/home/banner',
    method: 'GET',
  })
}

export { getBannerApi };
