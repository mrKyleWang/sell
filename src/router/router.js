// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import Goods from '../components/goods/Goods.vue';
import Ratings from '../components/ratings/Ratings.vue';
import Seller from '../components/seller/Seller.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller },
    { path: '/*', redirect: '/goods' }
  ]
});

export default router;
