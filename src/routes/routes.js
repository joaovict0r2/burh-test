import Vue from 'vue';
import VueRouter from 'vue-router';
import Favorites from '../views/Favorites';
import home from '../Index';
import Details from '../views/Details';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/favoritos', component: Favorites },
    { path: '/detalhes/:id', component: Details },
  ],
});
