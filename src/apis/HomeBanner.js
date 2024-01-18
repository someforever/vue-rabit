import  httpInstance from '@/utils/http'

// 获取banner轮播图数据
export function getBannerAPI(){
  return httpInstance({
    url: '/home/banner'
  })

}