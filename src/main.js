import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/routes';
import Store from './store';
import '../assets/css/tailwind.css';

import VueMobileDetection from 'vue-mobile-detection';
Vue.use(VueMobileDetection);

import storePlugin from './storePlugin';
Vue.use(storePlugin);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  Store,
  render: (h) => h(App),
}).$mount('#app');
