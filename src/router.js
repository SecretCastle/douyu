import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home';
import List from './components/List';
import Find from './components/Find';
import Me   from './components/Me';
import Room from './components/Room';

Vue.use(VueRouter);
const routes =[
    {
        path : '/' ,
        component : Home
    },
    {
        path : '/list' ,
        component : Home
    },
    {
        path : '/home' ,
        component : List
    },
    {
        path : '/find' ,
        component : Find
    },
    {
        path : '/me',
        component : Me
    },{
        path : '/room/:type',
        name : 'room',
        component : Room
    }
];

const router = new VueRouter({
    routes
});

export default router;
