<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/categoryStore.js'
import {onMounted} from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 在RouterView里面加上key可以阻止组件复用，使组件销毁重建  <RouterView :key="$route.fullPath"/>-->
  <RouterView />
  <LayoutFooter />
</template>