import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Fang from './components/Fang.vue';
import Fang2 from './components/Fang2.vue';

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Fang},
        {path:'/xxx',component:Fang2}
    ]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
