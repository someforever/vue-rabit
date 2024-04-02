import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const lazyPlugin = {
  install(app){
    // 定义全局指令
app.directive('img-lazy',{
  mounted(el,binding){
    // el: 指令绑定的那个元素：img
    // binding: binding.value 指令等于号后面绑定的表达式的值，url
    // console.log(el,binding.value);
    //使用vueuse里面的方法
    const {stop} = useIntersectionObserver(
      el, // 目标监听值
      ([{ isIntersecting }]) => {
        // console.log(isIntersecting);  
        if (isIntersecting) {
          // 如果true代表进入了视图,就发送网络请求
          el.src = binding.value
          stop()  // 防止继续监听浪费内存
        }
      },
    )
  }
})
  }
}