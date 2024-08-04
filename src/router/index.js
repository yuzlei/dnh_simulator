import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'app',
        component: () => import("@/App.vue"),
        redirect: '/home/2/1',
    }, {
        path: '/home/:teamId/:mapId',
        name: 'home',
        component: () => import("@/components/home.vue"),
    }, {
        path: '/upload',
        name: 'upload',
        component: () => import("@/components/upload.vue"),
    }, {
        path: '/404',
        name: '404',
        component: () => import("@/components/notfound.vue"),
    }, {
        path: '/:catchAll(.*)',
        redirect: '/404',
    }]
})

export default router