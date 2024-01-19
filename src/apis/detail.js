import request from '@/utils/http'

export function getDetail(id) {
  return request({
    url: '/goods',
    params:{
      id
    }
  })
}