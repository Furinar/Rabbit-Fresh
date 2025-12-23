import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router/index'
import { lazyPlugin} from '@/directive/index'
import '@/styles/common.scss'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(lazyPlugin)

app.mount('#app')
