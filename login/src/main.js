

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import Login from './pages/Login.vue';
import Register from'./pages/Register.vue';

const routes =[{path:"/", component:App},
    { path:"/login", component:Login},
    { path:"/register", component:Register}
];
    
const router = createRouter({
    history:createWebHashHistory(),
    routes,
});

createApp(App).mount('#app')
