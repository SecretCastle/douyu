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
        name : 'list',
        component : List
    },
    {
        path : '/list' ,
        component : List
    },
    {
        path : '/home' ,
        component : Home
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
