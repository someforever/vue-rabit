// 管理用户数据相关
import { ref } from 'vue'
import { defineStore } from 'pinia'
import {loginAPI} from '@/apis/user'
import {useCartStore} from './cartStore'
import {mergeCartAPI} from '@/apis/cart'
export const useUserStore = defineStore('user',()=>{
  const cartStore = useCartStore()
  // 定义管理用户的数据
  const userInfo = ref({})
  // 定义获取数据的接口函数
  const getUserInfo =async ({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result
    // 执行合并购物车的操作
    await mergeCartAPI(cartStore.cartList.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    } ))
    cartStore.updateNewList()
  }
  // 退出登录清除数据
  const clearUserInfo = ()=>{
    userInfo.value = {}
    // 执行清除购物车action
    cartStore.clearCart()
  }
  // 把数据与方法返回出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
  
},  {persist: true,}
)