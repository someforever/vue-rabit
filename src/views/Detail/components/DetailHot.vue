<script setup>
// 获取24小时热榜
import {fetchHotGoodsAPI} from '@/apis/detail.js'
import {ref,onMounted,computed} from 'vue'
import {useRoute} from 'vue-router'
const HotList = ref([])
const route = useRoute()

// 设计props参数，适配相同组件下不同的内容
const props = defineProps({
  HotType:{
    type:Number
  }
})

// 适配title
const TypeMap = {
  1: "24小时热榜",
  2: "周热榜"
}
const title = computed(()=>TypeMap[props.HotType])

const  getHot = async()=>{
  const res = await fetchHotGoodsAPI(
    {id: route.params.id,
    type: props.HotType
  })
  HotList.value = res.result
}

onMounted(() => {
  getHot()
})

</script>


<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in HotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>