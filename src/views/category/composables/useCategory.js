// 获取分类数据
import { GetCategoryAPI } from '@/apis/Category'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {onBeforeRouteUpdate} from 'vue-router'
export function useCategory() {
  const CategoryDate = ref({})
const route = useRoute()
const GetCategory = async (id = route.params.id) => {
  const res = await GetCategoryAPI(id)
  CategoryDate.value = res.result
}

onMounted(() => GetCategory())

// 路由参数变化时可以重新发送分类数据接口
onBeforeRouteUpdate((to)=>{
  console.log('路由变化了');
  // 存在问题：使用最新的路由参数请求最新的路由数据
  console.log(to);
  GetCategory(to.params.id)
})
return {
  CategoryDate,
  
}
}
