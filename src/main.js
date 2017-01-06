// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import vueResource from 'vue-resource';
import router from './router'

Vue.use(vueResource);

var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)    //...App
});
