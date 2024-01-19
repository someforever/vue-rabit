// 获取轮播图
import { getBannerAPI } from '@/apis/Home.js'
import { ref, onMounted } from 'vue';
export function useBanner() {
  const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: '2'
  })
  console.log(res);
  bannerList.value = res.result
}

onMounted(() => {
  getBanner()
})
return {
  bannerList
}
}
