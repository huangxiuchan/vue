import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResouce from 'vue-resource';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import sellers from './components/sellers/sellers';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResouce);

const routes = [
  {path: '/', redirect: '/goods'},
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/sellers', component: sellers }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

// router.push('/goods');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
