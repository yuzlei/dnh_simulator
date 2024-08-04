import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/'
import '@/styles/index.scss'
import { pinia } from '@/store/index.js'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(pinia).use(router)
app.mount('#app')
