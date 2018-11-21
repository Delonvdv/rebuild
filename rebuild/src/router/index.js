import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import WelcomePage from '../welcome/WelcomePage.vue';
import WelcomeNav from '../shared/WelcomeNav.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'Home',
        component: HomePage,
        
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

