import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import carousel from "../views/carousel";
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/carousel',
          name:'carousel',
          component:carousel,
        }
      ]
    }
  ]
})
