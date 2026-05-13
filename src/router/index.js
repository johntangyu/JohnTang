import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/achievements',
        name: 'Achievements',
        component: () => import('@/views/Achievements.vue')
    }, 

    {
        path: '/experiences',
        name: 'Experiences',
        component: () => import('@/views/Experiences.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

