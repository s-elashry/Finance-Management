import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
    router,
    render: h => h(App)
    }).$mount('#app')