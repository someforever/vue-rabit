import  httpInstance from '@/utils/http'

// 获取banner轮播图数据
export function getBannerAPI(){
  return httpInstance({
    url: '/home/banner'
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