<template>
  <div class="body_wrap">
    <div class="nav_header">
      <ul>
        <li v-for="item in navlist"
            @click="navActive(item.id)"
            :class="[curId == item.id ? 'active':'']">
          <router-link :to="item.path">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="body_content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name:'index',
    data(){
      return{
        msg: 'Welcome to Your Vue.js App',
        navlist:[
          {name:'轮播',path:'/carousel',id:1},
          {name:'正则',path:'/',id:2}
        ],
        curId:'',
      }
    },
    methods:{
      navActive(id){
        this.curId = id
      }
    }
  }
</script>
<style>
  @import "../assets/css/index.css";
</style>
