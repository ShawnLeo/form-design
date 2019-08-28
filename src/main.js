import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
// import './utils/vux';

import {rem} from "./utils/utils";

import 'iview/dist/styles/iview.css';

window.Vue = Vue;

Vue.config.productionTip = false;

Vue.use(iView);

rem();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
