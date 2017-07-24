<template>
  <div>
    <div class="back"><i class="el-icon-arrow-left" @click="goBack"></i></div>
    <div class="namebox">{{ person.name }}</div>
    <div class="diqubox">设置备注和权限</div>
    <div class="diqubox">地区：{{ person.diqu }}</div>
    <div>
      <router-link to="xiangce" class="xiangcebox" tag="li">个人相册</router-link>
    </div>
    <div>
      <router-link to="more" class="morebox" tag="li">更多</router-link>
    </div>
    <div style="text-align: center">
      <el-button type="success" class="btn">发信息</el-button>
      <el-button class="btn">视频聊天</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'personDetail',
    data () {
      return {
        person: {name: 'Amy', diqu: '西藏'}
      }
    },
    methods: {
      goBack: function () {
        window.history.back(-1)
      }
    }
  }
</script>
<style scoped>
  div{
    background: #fff;
    text-align: left;
  }
  .back{
    height: 44px;
    line-height: 44px;
    background: #666666;
    padding: 0 10px;
    color: #ffffff;
  }
  .namebox{
    height: 80px;
    line-height: 80px;
    padding: 0 10px;
  }
  .diqubox{
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    padding: 0 10px;
  }
  .xiangcebox{
    height: 100px;
    line-height: 100px;
    margin-top: 10px;
    padding: 0 10px;
  }
  .morebox{
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    padding: 0 10px;
  }
  .btn{
    width:90%;
    margin-top: 40px;
    margin-left: 0;
  }
  li{
    list-style: none;
  }
</style>
