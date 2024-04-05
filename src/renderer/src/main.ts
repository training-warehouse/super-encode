import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

import { createPinia } from 'pinia'

import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'
import router from '@renderer/router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.use(createPinia())
app.mount('#app')
