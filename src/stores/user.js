// 管理用户数据相关
import { ref } from 'vue'
import { defineStore } from 'pinia'
import {loginAPI} from '@/apis/user'
export const useUserStore = defineStore('user',()=>{
  // 定义管理用户的数据
  const userInfo = ref({})
  // 定义获取数据的接口函数
  const getUserInfo =async ({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result
  }
  // 退出登录清除数据
  const clearUserInfo = ()=>{
    userInfo.value = {}
  }
  // 把数据与方法返回出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
  
},  {persist: true,}
)