import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HelloWorld.vue'
import Login from '/src/views/Login.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router