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