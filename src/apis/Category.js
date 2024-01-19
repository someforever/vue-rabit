import request from '@/utils/http'

export function GetCategoryAPI(id) {
  return request({
    url: '/category',
    params:{
      id
    }
  })
}

// 获取二级分类数据列表
export const getCategoryFilterAPI = (id) => {
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}