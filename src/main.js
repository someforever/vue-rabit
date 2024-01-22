import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// 引入懒加载插件并导入进来
import {lazyPlugin} from '@/directives/index'
// 引入全局组件
import { componentPlugin } from './components'

const app = createApp(App)

const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)


app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')

