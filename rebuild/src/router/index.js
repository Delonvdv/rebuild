import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import WelcomePage from '../welcome/WelcomePage.vue';
import WelcomeNav from '../shared/WelcomeNav';

Vue.use(Router);

export default new Router({
    // mode: 'History',
    routes: [
        {
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
          sidebar: WelcomeNav,
        },
      }
    ]
    
});

