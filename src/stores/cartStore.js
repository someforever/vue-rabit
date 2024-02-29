import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {useUserStore} from './user'
import { insertCartAPI, findNewCartListAPI } from '@/apis/cart'
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(()=> userStore.userInfo.token)
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = async (detailDate) => {
    const {skuId,count} = detailDate
    if (isLogin) {
      // 登录之后加入购物车逻辑
     await insertCartAPI({skuId,count})

     const res = await findNewCartListAPI()
     cartList.value = res.result
    }else{
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => detailDate.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(detailDate)
    }
    }
 
  }

  // 3. 定义action - delCart
  const delCart = (skuId)=>{
    // 1. 找到要删除的下标志 splice
    const idx = cartList.value.findIndex((item) =>skuId === item.skuId)
    cartList.value.splice(idx,1)
    // 2. 使用数组的过滤方法 filter

  }

  // 计算属性
  // 1. 总的数量 所有项的count之和
  const allCount = computed(()=> cartList.value.reduce((a,c)=> a + c.count, 0 ))
  // 2. 总价 所有项的count*price之和
  const allPrice = computed(()=> cartList.value.reduce((a,c)=> a + c.count*c.price, 0 ))


  // 3. 已选择数量
  const selectedCount = computed(()=>cartList.value.filter(item => item.selected).reduce((a,c)=> a + c.count, 0 ))
  // 4. 已选择商品价格合计
  const selectedPrice = computed(()=>cartList.value.filter(item => item.selected).reduce((a,c)=> a + c.count*c.price, 0 ))
  // 单选功能
  const singleCheck = (skuId,selected)=>{
    // 通过skuID 找到要修改芳那一项，然后把它的selected修改为传过来的selected
    const item = cartList.value.find((item)=> item.skuId === skuId )
    item.selected = selected
  }

  // 是否全选
  const isAll = computed(()=> cartList.value.every((item)=> item.selected))

  // 全选功能
  const allCheck =(selected)=>{
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach(item=>item.selected = selected)
  }
  return {
    cartList,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    selectedCount,
    selectedPrice,
    allCount,
    allPrice,
    isAll
  }
}, {
  persist: true,
})