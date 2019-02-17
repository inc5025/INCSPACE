// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import 'highlightjs/styles/atom-one-dark.css'

import axios from 'axios';
import { format } from 'date-fns';
import App from './App';
import router from './router';
import authStore from  './store'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    pageNumber: 1,
  },
  mutations: {
    setPageNumber : (state, n) => state.pageNumber = n
  }
});

Vue.filter('Date_YMD', function(value) {
  if (value) {
    return format(new Date(value), 'YYYY. M. D');
  }
});

Vue.filter('Date_YMDHM', function(value) {
  if (value) {
    return format(new Date(value), 'YYYY. M. D. h:mm a');
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  authStore,
  components: { App },
  template: '<App/>'
});
