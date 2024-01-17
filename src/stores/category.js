import { ref  } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/Layout';
export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  const CategoryList = ref([])
  // 获取导航数据的方法
  const getCategory = async ()=>{
  const res = await getCategoryApi()
  console.log(res);
  CategoryList.value = res.result
}
  return {
    CategoryList,
    getCategory
  }
})
