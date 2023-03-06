import { createApp } from 'vue';
import App from './App'
import router from './router';
import './index.css'
import '@/axios'

// Import child components
import LandingPage from './landingPage/App.vue';
import Zenox from './zenox/App.vue';

// Create parent Vue app
const app = createApp(App);
// Register router
app.use(router)

// Register child components
app.component('LandingPage', LandingPage);
app.component('Zenox', Zenox);

// Mount parent Vue app
app.mount('#app');