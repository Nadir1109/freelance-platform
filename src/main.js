import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/global.css';
import '@/assets/base.css';
import '@/assets/main.css';
import './assets/navbar.css';


createApp(App)
    .use(router)
    .mount('#app');
