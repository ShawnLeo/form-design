import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';

import QuillEditor from 'vue-quill-editor';

import {rem} from "./utils/utils";

import 'iview/dist/styles/iview.css';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

window.Vue = Vue;

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(QuillEditor);

rem();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
