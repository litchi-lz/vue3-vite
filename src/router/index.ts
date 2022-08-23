import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'
export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Facade",
        component: () => import("@/views/welcome-page/index.vue"),

    },
    {
        path: '/',
        component: Layout,
        children: [
          {
            path: '/blog',
            name: 'Blog',
            component: () => import('@/views/welcome-page/blog.vue'),
          },
          {
            path: '/substance',
            component: () => import('@/views/welcome-page/substance.vue'),
          },
        ]
      },
      {
        path: '/album',
        name: 'Album',
        component: () => import("@/views/exhibition/album.vue")
      },
      {
        path: '/accordion',
        name: 'Accordion',
        component: () => import("@/views/exhibition/accordion.vue")
      },
]
const router: Router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: constantRoutes
})
export default router