/*
 * @Author: duanxin
 * @Date: 2024-10-28 15:24:27
 * @LastEditTime: 2024-10-28 17:22:57
 * @Description: 
 * @FilePath: \block_h5\src\main.js
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant';
import 'vant/lib/index.css';

import i18n from "./vueI18n/index";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Vant);
app.use(i18n)
app.use(router)
app.mount('#app')
