<template>
  <div class="hello">
    <head-component class="one"></head-component>

    <transition name="slide-fade">
      <router-view class="view two"></router-view>
    </transition>

    <foot-component class="three"></foot-component>

  </div>
</template>

<script>
  import headComponent from '@/components/one.vue'
  import footComponent from '@/components/three.vue'
export default {
    name: 'hello',
    data () {
      return {
        msg: 'wechat',
        visible: false
      }
    },
    components: {headComponent, footComponent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    display: inline-block;
    line-height: 50px;
    padding: 0 20px;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
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
   top: 60px;
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

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

a {
  color: #42b983;
}

  ul{
    list-style: none;
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
