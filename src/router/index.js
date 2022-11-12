import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Reactive',
    name: 'Reactive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reactive.vue'),
    props: { msg: "Reactive Prop" }
  },
  {
    path: '/Modularize',
    name: 'Modularize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Modularize.vue'),
    props: { msg: "Modularize" }
  },
  {
    path: '/Reuse',
    name: 'Reuse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reuse.vue'),
    props: { msg: "Reuse from file" }
  },
  {
    path: '/LiecycleHook',
    name: 'LiecycleHook',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LifecycleHook.vue'),
    props: { msg: "LiecycleHook" }
  },
  {
    path: '/Watch',
    name: 'Watch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue'),
    props: { msg: "Watch" }
  },
  {
    path: '/Composable',
    name: 'Composable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Composable.vue'),
    props: { msg: "Composable" }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
