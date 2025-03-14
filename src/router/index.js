import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {path: '/', redirect: '/userinfo'},
  {path: '/userinfo', name: 'userinfo', component: () => import('@views/userinfo/UserInfo.vue')},
  {path: '/login', name: 'login', component: () => import('@views/login/Login.vue')},
  {path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('@views/notfound/NotFound.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router