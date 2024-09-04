// import './assets/main.css'
import './assets/all.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 全域註冊
import EasyCard from './components/EasyCard.vue'

const app = createApp(App)

app.use(router)
// 註冊位置會在 createApp後 & mount前
app.component('EasyCard', EasyCard)

app.mount('#app')
