import Vue from 'vue';
import App from './App.vue';

import router from './router';
import VueResource from 'vue-resource';
import store from './store';
Vue.use(VueResource);


// Global Components
import WelcomeNav from './shared/WelcomeNav.vue';
Vue.component('WelcomeNav', WelcomeNav);



//-------------------------------------------
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
