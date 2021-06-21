import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HelloWorld.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/auth/Register.vue'
import RRegister from '/src/views/auth/register_.vue'
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
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/rregister',
        name: 'RRegister',
        component: RRegister
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router