import { createApp } from 'vue'
import App from './App.vue'
import {routes} from './config/route'
import * as VueRouter from 'vue-router'
// @ts-ignore
const app = createApp(App)
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes // `routes: routes` 的缩写
})
app.use(router);

app.mount('#app')
