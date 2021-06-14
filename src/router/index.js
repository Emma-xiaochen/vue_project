import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = new VueRouter({
  // 配置路由和最近俺之间的应用关系
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log(to);
  next()
})

export default router
