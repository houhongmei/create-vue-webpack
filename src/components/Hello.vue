<template>
  <div class="hello">
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
      <!--<br>-->
      <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
    <!--<router-link to="Foo">go to Foo</router-link>-->
    <div class="clearfix">
      <router-view class="view one" ></router-view>
      <router-view class="view two" name="two"></router-view>
      <router-view class="view three" name="three"></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .one{
   width:100%;
   height: 44px;
  background: #666;
   /*float: left;*/
   color: #fff;
   position: fixed;
   top:0;
 }
 .two{
   width:100%;
   height: 400px;
   /*float: left;*/
   /*color: #fff;*/
   position: fixed;
   top: 44px;
 }
 .three{
   width: 100%;
   height: 50px;
   /*float: left;*/
   background: #fff;
   position: fixed;
   bottom: 0;
 }
 .clearfix:after{
   content: ".";
   display: block;
   height: 0;
   visibility: hidden;
   clear: both;
   zoom: 1;
 }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
