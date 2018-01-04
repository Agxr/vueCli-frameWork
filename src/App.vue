<template>
  <div id="app">
    <mt-header title = "标题过长会自动隐藏后面的内容的哦">
      <router-link to="/hello1" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot = "right"></mt-button>
    </mt-header>
    <h1>我是src/app.vue的h1</h1>

    <div class="swipe-wrapper" :auto="400">
      <mt-swipe :auto="0" ref="swipeWrapper">
        <mt-swipe-item class="swip-item-1 item">1</mt-swipe-item>
        <mt-swipe-item class="swip-item-2 item">2</mt-swipe-item>
        <mt-swipe-item class="swip-item-3 item">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <router-link to="/">点击进入hello首页</router-link>
    <br>
    <router-link to="/hello1">点击进入hello1</router-link>
    <br>
    <router-link to="/hello2">点击进入hello2</router-link>
    <br>
    <router-link to="/h">点击进入不存在的路径</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
//  import Swiper from 'swiper'

  export default {
    name: 'app',
    computed: {...mapGetters(['gettersMsg'])}
  }
</script>


<style lang="sass">
  @charset "utf-8";html{color:#000;background:#f8f9fc;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .swipe-wrapper{
    width: 750px;
    height: 300px;
  }
  .swip-item-1{
    width: 400px!important;
    background: yellow;
  }
  .swip-item-2{
    width: 100px!important;
    background: red;
  }
  .swip-item-3{
    width: 600px!important;
    background: green;
  }
</style>
