import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/home.vue'
import Menu from './views/menu.vue'
import AboutMe from './views/AboutMe.vue'
import Login from './views/login.vue'
import CheckLogin from './views/CheckIfLogin.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'
import Discover from './views/Discover.vue'
import Dev from './views/Dev.vue'
import Feed from './views/Feed.vue'

import '@/axios'






// add this
import './index.css'

const router = createRouter({

    history: createWebHistory(),

    routes: [
        // {path: '/home', name: 'home', component: Home},
        {path: '/login', name: 'login', component: Login},
        {path: '/', name: 'checkLogin', component: CheckLogin},
        {path: '/menu', name: 'menu', component: Menu},
        {path: '/about-me', name: 'AboutMe', component: AboutMe},
        {path: '/register', name: 'Register', component: Register},
        {path: '/Feed', name: 'Feed', component: Feed},
        {path: '/Discover', name: 'Discover', component: Discover},
        {path: '/Dev', name: 'Dev', component: Dev},
        {path: '/Profile', name: 'Profile', component: Profile},





    ]

})



createApp(App).use(router).mount('#app')