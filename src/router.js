import Vue from 'vue';
import Router from 'vue-router';
import decorate from './views/form-decorate/index.vue';
import preview from './views/form-decorate/preview.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'decorate',
      component: decorate
    },
		{
			path: '/preview',
			name: 'preview',
			component: preview
		}
  ]
});
