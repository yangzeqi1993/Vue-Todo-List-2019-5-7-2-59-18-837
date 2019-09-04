import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Main from '../components/Main.vue';
import Home from '../components/Home.vue';
import MyInfo from '../components/MyInfo.vue';
import List from '../components/List.vue';

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        { path: '/', name: 'Main', component: Main },

        { path: '/home',
          name: 'Home',
          component: Home,
          children: [
                        { path: '/home/myinfo', name: 'MyInfo', component: MyInfo },
                        { path: '/home/list', name: 'List', component: List }
                    ]
        },

    ]}

);

export default router;
