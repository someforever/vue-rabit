import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入懒加载插件并导入进来
import {lazyPlugin} from '@/directives/index'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)


app.mount('#app')

