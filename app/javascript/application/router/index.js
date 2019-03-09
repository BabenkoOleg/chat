import Vue from 'vue';
import Router from 'vue-router';

import authRoutes from './modules/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...authRoutes,
  ],
});
