import Vue from 'vue';
import App from './App.vue';

import router from './router';
import VueResource from 'vue-resource';
import store from './store';
// import VueSessionStorage from 'vue-sessionstorage'
import VueSession from 'vue-session'
Vue.use(VueSession);

Vue.use(VueResource);
// Vue.use(VueSessionStorage);

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
