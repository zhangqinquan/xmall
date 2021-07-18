
import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('@/views/Index');
const Login = () => import('@/views/Login');
const Home = () => import('@/views/Home');
const Goods = () => import('@/views/Goods');
const Thanks = () => import('@/views/Thanks');
const GoodsDetails = () => import('@/views/GoodsDetails');
const User = () => import('@/views/User');

// import Index from "@/views/Index"
// import Login from "@/views/Login"
// import Home from "@/views/Home"
// import Goods from "@/views/Goods"
// import Thanks from "@/views/Thanks"
// import GoodsDetails from '@/views/GoodsDetails';
// import User from '@/views/User';

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home",
    name:'home',
    component:Index,
    children:[
      {
        path:"home",
        component:Home
      },
      {
        path:"goods",
        component:Goods
      },
      {
        path:"thanks",
        component:Thanks
      },
      {
        path:'goodsDetails',
        name:'goodsDetails',
        component:GoodsDetails
      }
    ]
  },
  {
    path:"/login",
    name:"name",
    component:Login
  },
  {
    path:'/user',
    name:'user',
    component:User,
    meta:{
      // 需要守卫
      auth:true
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
