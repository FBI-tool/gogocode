import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
  },
  {
    path: '/',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '@/components/icon/Comp.vue'),
  },
];

export default routes;