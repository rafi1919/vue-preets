import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {DaisyUI} from 'daisyui'
import './index.css'

createApp(App).use(store).use(router).use(DaisyUI).mount('#app')
