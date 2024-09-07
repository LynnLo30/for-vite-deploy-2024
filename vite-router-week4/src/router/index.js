import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../views/SampleView.vue')
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: () => import('../views/Sample2View.vue')
    },
    {
      path: '/nest',
      name: 'nest',
      component: () => import('../views/NestView.vue'),
      // 內層渲染
      children: [
        {
          path: '',
          name: 'default',
          component: () => import('../views/NestChildDefaultView.vue')
        },
        {
          // 內層不補斜線/
          path: 'child',
          name: 'child',
          component: () => import('../views/NestChildView.vue')
        },
        {
          // 動態路由
          // 不建議使用在外層
          path: ':id',
          name: '',
          component: () => import('../views/DynView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    }
  ]
})

export default router
