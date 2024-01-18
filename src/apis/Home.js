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