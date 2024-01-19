import request from '@/utils/http'

export function GetCategoryAPI(id) {
  return request({
    url: '/category',
    params:{
      id
    }
  })
}