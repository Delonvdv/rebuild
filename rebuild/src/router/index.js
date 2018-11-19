import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './home/HomePage.vue';


Vue.use(Router);

export default new Router({
    mode: 'History',
    routes: {
        path: '/',
        name: 'Home',
        components: {
          default: HomePage,
        },
      }, {
        path: '/welcome',
        name: 'Welcome',
        components: {
          default: WelcomePage,
          sidebar: SidebarBuild,
        },
      },


});

