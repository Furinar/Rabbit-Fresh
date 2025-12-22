import request from "@/router/request";

export function getCategory() {
  return request({
    url:'home/category/head',
  })
}
