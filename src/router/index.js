import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Order from '../view/order/order'
import Find from '../view/find/find'
import Mine from '../view/mine/mine'
import Takeout from '../view/takeout/takeout.vue'

Vue.use(VueRouter)
 let router=[
        {
          path:"/",
          component:App,
        },{
          path:"/order",
          component:Order,
        },{
          path:"/takeout",
          component:Takeout,
        },{
          path:"/find",
          component:Find,
        },{
          path:"/mine",
          component:Mine,
        },
 ]
export default router;