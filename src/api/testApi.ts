import request from "@/utils";

export function getCategory() {
  return request({
    url:'home/category/head',
  })
}
