import Store from './store';
export default {
  Store,
  install(Vue) {
    Vue.prototype.$store = Store;
  },
};
