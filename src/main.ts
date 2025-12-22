import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { getCategory } from '@/api/testApi'

getCategory().then(res =>{
  console.log(res);
})

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
