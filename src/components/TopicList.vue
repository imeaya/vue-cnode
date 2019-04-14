<template>
  <div>
    <group>
      <cell v-for="(item,index) in lists" :key="index">
        <span slot="title" class="cell_title">
          <span class="reply_count">{{item.reply_count}}</span> /
          <span class="visit_count">{{item.visit_count}}</span>
          <span v-if="item.top" class="top">置顶</span>
          <span class="tab" v-if="$route.path=='/topiclist/all'">{{item.tab}}</span>
          <span class="title">{{item.title}}</span>
        </span>
        <span slot="icon" class="cell_author_avatar"><img :src="item.author.avatar_url" alt=""></span>
      </cell>
    </group>
  </div>
</template>
<script>
import {Group,Cell} from 'vux';

export default {
  name:'topiclist',
  props:['name'],
  components:{
    Group,
    Cell
  },
  data:function(){
    return {
      lists:[]
    }
  },
  //Ajax可以使用在声明周期回调函数中
  //Ajax也可以使用在导航守卫中(特别适合动态路由组件)
  beforeRouteEnter:function(to,from,next){
    //进入该组件之前的回调操作，此处不能使用this对象，因为组件此时还未被创建
    //to表示待进入的组件路由
    //from表示离开的组件路由
    //next表示函数勾子，执行下一步操作
    next(function(vm){
      //vm表示当前组件的实例对象
      vm.$http.get('/topics',{
        params:{
          // tab:vm.name,
          tab:to.params.name
        }
      }).then(function(response){
        //response表示响应消息对象
        //response.data表示响应消息主体数据
        if(response.data.success){
          vm.lists=response.data.data;
        }
      });
    });
  },
  //动态路由切换时，使用的导航守卫
  beforeRouteUpdate:function(to,from,next){
    //可以直接使用this表示当前组件对象
    var app=this;
    //重新发送Ajax请求
    this.$http.get('/topics',{
      params:{
        tab:to.params.name
      }
    }).then(function(response){
        if(response.data.success){
          //异步请求，此时this不再表示当前组件
          app.lists=response.data.data;
        }
      });;
    //执行下一步操作
    next()
  }
}
</script>

<style>
  .cell_title {
    font-size: .8em;
  }
  .cell_title .reply_count {
    color:#9e78c0;
  }
  .cell_title .visit_count {
    color:#b4b4b4;
  }
  .cell_title .top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .cell_title .tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
  }
  .cell_author_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
    margin-right:3px;
  }
</style>
