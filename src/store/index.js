//vuex状态管理
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

//全局注册
Vue.use(Vuex);

//创建Store对象
const store = new Vuex.Store({
    //状态数据
    state:{
            //主题分类数据
        topics:[
            {name:'all',desc:'全部'},//默认选中
            {name:'good',desc:'精华'},
            {name:'share',desc:'分享'},
            {name:'ask',desc:'问答'},
            {name:'job',desc:'招聘'},
            {name:'dev',desc:'测试'}
        ],
        //未登录时的更多菜单
        unLoginedMoreMenus:{
            login:"登录"
        },
        //登录状态下的更多菜单
        loginedMoreMenus:{
            center:"个人中心",
            msg:"消息通知",
            logout:"登出"
        },
        isLogined:false,//是否登录
        isShowMoreMenus:false //是否显示更多菜单
    },
    //状态数据的计算属性
    getters:{
        moreMenus:function(state){
            if(state.isLogined){//用户处于登录状态，返回登录后的更多菜单
                return state.loginedMoreMenus;
            }else{
                return state.unLoginedMoreMenus;
            }
        },
    },
    mutations,
    actions
});

//对外输出模块
export default store;