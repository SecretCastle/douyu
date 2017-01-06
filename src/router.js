import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home';
import List from './components/List';

Vue.use(VueRouter);
const routes =[
    {
        path : '/' ,
        component : Home
    },
    {
        path : '/home' ,
        component : Home
    },
    {
        path : '/list' ,
        component : List
    }
];

const router = new VueRouter({
    routes
});

export default router;
