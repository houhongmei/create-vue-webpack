<template>
  <!--<h1>{{msg}}</h1>-->
  <ul>
    <router-link to="/weixin" tag="li">微信</router-link>
    <router-link to="/tongxun" tag="li">通讯录</router-link>
    <router-link to="/faxian" tag="li">发现</router-link>
    <router-link to="/me" tag="li">我</router-link>
  </ul>
</template>
<script>
  export default {
    name: 'three',
    data () {
      return {
        msg: 'foot'
      }
    }
  }
</script>
<style scoped>
  ul{
    height:100%;
    width:100%;
    border-top:1px solid #666;
  }
  ul li{
    width:25%;
    height: 100%;
    float: left;
    line-height:50px;
  }
</style>
