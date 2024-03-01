// 登录用户相关
import request from '@/utils/http'
export const loginAPI =({account,password})=>{
  return request({
    url:'/login',
    method: 'POST',
    data:{
      account,
      password
    }
  })
}

// 会员中心里个人中心的猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}