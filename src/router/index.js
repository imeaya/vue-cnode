import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/components/HelloFromVux'
// import Home from '@/components/HelloWorld'
// import Home from '@/components/Home.vue';
import TopicList from '@/components/TopicList';
import Topic from '@/components/Topic';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import Center from '@/components/Center';
import Msg from '@/components/Msg';


//全局注册路由
Vue.use(VueRouter)

//定义路由信息对象
const routes = [
  // {path: '/',name:'home',component: Home},
  {path: '/',redirect:'/topiclist/all'},//重定向
  {path:'/topiclist/:name',name:'topiclist',component:TopicList,props:true},//主题列表
  {path:'/topic/:id',name:'topic',component:Topic,props:true},//文章详情
  {path:'/login',name:'login',component:Login},//登录
  {path:'/center',name:'center',component:Center},//个人中心
  {path:'/msg',name:'msg',component:Msg},//消息通知
  {path:'/logout',name:'logout',component:Logout},//登出
];

//创建路由管理器
const router = new VueRouter({
  routes
})

//对外输出模块
export default router;



