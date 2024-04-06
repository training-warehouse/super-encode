import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'
import router from '@renderer/router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount('#app')
