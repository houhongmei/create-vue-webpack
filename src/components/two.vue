<template>
  <!--<h1>{{msg}}</h1>-->
  <ul>
    <router-link to="/page1" tag="li">page1</router-link>
    <router-link to="/page2" tag="li">page2</router-link>
    <router-link to="/page3" tag="li">page3</router-link>
    <router-link to="/page4" tag="li">page4</router-link>
    <router-link to="/page5" tag="li">page5</router-link>
  </ul>
</template>
<script>
  export default {
    name: 'two',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped>
  ul{
    width:100%;
    height:100%;
  }
  ul li{
    width:100%;
    height: 50px;
    line-height: 50px;
  }
</style>
