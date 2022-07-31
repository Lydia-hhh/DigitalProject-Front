import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'UserLayout',
        component: ()=>import('@/UserLayout'),
        redirect:'/basic',
        children:[
            {
                path: 'basic',
                name: 'Basic',
                component: ()=>import('@/pages/Content'),
            },
            {
                path: 'morpho',
                name:'Morpho',
                component: ()=>import('@/pages/Content'),
            },
            {
                path: 'noise',
                name:'Noise',
                component: ()=>import('@/pages/Content'),
            },
            {
                path: 'edge',
                name:'Edge',
                component: ()=>import('@/pages/Content'),
            },
            {
                path: 'line',
                name:'Line',
                component: ()=>import('@/pages/Content'),
            },
            {
                path: 'style',
                name:'Style',
                component: ()=>import('@/pages/Content'),
            },

        ]
    }

]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router