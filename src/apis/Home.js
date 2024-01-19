import  httpInstance from '@/utils/http'

// 获取banner轮播图数据
export function getBannerAPI(params = {}){
  // 首页默认为1
  const {distributionSite = '1'} = params
  return httpInstance({
    url: '/home/banner',
    params:{
      distributionSite
    }
  })
}

// 获取新鲜好物数据
export function getNewAPI(){
  return httpInstance({
    url: '/home/new'
  })
}

// 获取人气推荐数据
export function getHotAPI(){
  return httpInstance({
    url: '/home/hot'
  })
}

// 获取全部分类数据
export function getAllProductAPI(){
  return httpInstance({
    url: '/home/category/head'
  })
}
