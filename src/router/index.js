import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/pay/index.vue'
import PayBack from '@/views/pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: layout,
      children:[
        {
          path:'',
          component:home
        },
        {
          path:'category/:id',
          component:category
        },
        {
          path:'category/sub/:id',
          component:subCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },
        {
          path: 'member',
          component: Member,
          children:[
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
        },

      ]
    },
    {
      path:'/login',
      component: login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior(){
    return { top: 0  }
  }
})

export default router
