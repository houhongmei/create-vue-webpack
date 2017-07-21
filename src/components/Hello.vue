<template>
  <div class="hello">
    <div class="one">
      <span class="fl">{{msg}}</span>
      <span class="fr">+</span>
      <span class="fr">@</span>
    </div>

    <div class="two">
      <div>{{ $route.params.id }}</div>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="visible = true">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
      <el-dialog v-model="visible" title="Hello world">
        <p>欢迎使用 Element</p>
      </el-dialog>
      <!--<router-view class="view one" ></router-view>-->
      <router-view class="view two"></router-view>
      <!--<router-view class="view three" name="three"></router-view>-->
    </div>

    <my-component></my-component>

    <ul class="three">
      <router-link to="/weixin" tag="li">微信</router-link>
      <router-link to="/tongxun" tag="li">通讯录</router-link>
      <router-link to="/faxian" tag="li">发现</router-link>
      <router-link to="/me" tag="li">我</router-link>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'wechat',
      visible: false
    }
  }
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
