import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dev from '@/views/Dev.vue'

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/:project',
                name: 'project-pop-up',
                component: () => import('@/views/Project.vue'),
            },
        ],
    },
    {
        path: '/dev',
        name: 'dev',
        component: Dev,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
