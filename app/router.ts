import { createRouter, createWebHistory } from 'vue-router';

// Import child routers

import Home from '@/landingPage/views/Home.vue';

import LandingPage from './landingPage/App.vue';
import Zenox from './zenox/App.vue';


//zenox
import Profile from '@/zenox/views/Profile.vue'
import Discover from '@/zenox/views/Discover.vue'
import Dev from '@/zenox/views/Dev.vue'
import Replies from '@/zenox/views/Replies.vue'
import Feed from '@/zenox/views/Feed.vue'


// Create parent router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingPage,
      children: [{
        path: "/",
        name: "home",
        component: Home
      },
    ]
    },
    {
      path: '/',
      component: Zenox,
      children: [
        {path: '/Feed', name: 'Feed', component: Feed},
        {path: '/Discover', name: 'Discover', component: Discover},
        {path: '/Dev', name: 'Dev', component: Dev},
        {path: '/Profile', name: 'Profile', component: Profile},
        {path: '/Replies', name: 'Replies', component: Replies},

      ],
    },
  ],
});

export default router;