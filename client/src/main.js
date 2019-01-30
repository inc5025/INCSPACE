// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

import axios from 'axios';
import { format } from 'date-fns';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$eventBus = new Vue({
  data: {
    pageNumber: 1
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
  components: { App },
  template: '<App/>'
});
