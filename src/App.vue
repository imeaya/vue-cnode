<template>
  <div id="app">
    <x-header :right-options="{showMore:true}" @on-click-more="showMoreMenus">cnode移动端社区</x-header>
    <tab v-bind:line-width="1">
      <tab-item v-for="(item,index) in topics" :key="index" :selected="$route.path=='/topiclist/'+item.name" @on-item-click="routeto">{{item.desc}}</tab-item>    
    </tab>
    <router-view></router-view>
    <actionsheet :menus="moreMenus" v-model="isShowMoreMenus" @on-click-menu="handleClickMoreMenu"></actionsheet>
  </div>
</template>

<script>
import {Tab,TabItem,XHeader,Actionsheet} from 'vux';
import {mapState,mapGetters} from 'vuex'

export default {
  name: 'app',
  data:function(){
    return {}
  },
  computed:{
    ...mapState(['topics','unLoginedMoreMenus','loginedMoreMenus','isLogined']),
    ...mapGetters(['moreMenus']),
    isShowMoreMenus:{
      get:function(){
        return this.$store.state.isShowMoreMenus;
      },
      set:function(nval){
        //触发mutation，从而修改状态数据
        this.$store.commit('mutaitonIsShowMoreMenus',nval);
      }
    }
  },
  components:{
    Tab,
    TabItem,
    XHeader,
    Actionsheet
  },
  methods:{
    //当单击路由链接时，实现路由跳转
    routeto:function(index){//参数index表示当前点击的tab项在整个tab中的位置序号
      //实现编程式路由导航
      this.$router.push('/topiclist/'+this.topics[index].name);
    },
    //点击x-header右侧“更多”时，显示菜单（actionsheet）
    showMoreMenus:function(){
      //显示actionsheet菜单
      //vuex中的状态数据不能被直接修改，只能使用mutations进行修改
      this.isShowMoreMenus=true;

    },
    //点击actionsheet菜单时，触发的回调函数
    handleClickMoreMenu:function(menukey,menuitem){
      //实现路由跳转
      this.$router.push('/'+menukey);
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
