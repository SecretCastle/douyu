// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Home from './components/Home';
import List from './components/List';

Vue.use(vueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

const routes =[
    { path : '/foo' , component : Home},
    { path : '/bar' , component : List}
];

const router = new VueRouter({
    routes
});

var app = new Vue({
  el: '#app',
  router,
  ...App,
});
