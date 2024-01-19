<script setup>
import {getCategoryFilterAPI,getSubCategoryAPI} from '@/apis/Category.js'
import {ref,onMounted} from 'vue';
import {useRoute} from 'vue-router'
import GoodItem from '@/views/home/components/GoodItem.vue'
const CategoryDate = ref({})
const route = useRoute()
const GetCategoryDate = async( )=>{
  const res = await getCategoryFilterAPI(route.params.id)
  CategoryDate.value = res.result
}
onMounted(() => {
  GetCategoryDate()
})

// 获取基础列表渲染
const goodList= ref([])
const reqDate = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime' 
 })
const GetGoodList = async( )=>{
  const res = await getSubCategoryAPI(reqDate.value)
  goodList.value = res.result.items
}
onMounted(() => {
  GetGoodList()
})
// changeTab 切换回调
const  changeTab = ()=>{
  console.log('tab切换了',reqDate.value.sortField);
  disabled.value = false
  reqDate.value.page = 1
  GetGoodList()
}
// 无限加载
const disabled = ref(false)
const load = async ()=>{
  console.log('加载了');
  // 对应的逻辑(1.页数加1   2.新老数据拼接)
  reqDate.value.page++
  const res = await getSubCategoryAPI(reqDate.value)
  goodList.value = [...goodList.value,...res.result.items]
  // 加载完毕，停止监听
  if(res.result.items.length === 0){
    
  disabled.value = true
  }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${CategoryDate.parentId}` }">{{CategoryDate.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{CategoryDate.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqDate.sortField" @tab-change="changeTab">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodItem v-for="goods in goodList" :goods = "goods" :key="goods.id"></GoodItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>