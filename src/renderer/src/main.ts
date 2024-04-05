import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'

import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'
import router from '@renderer/router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
