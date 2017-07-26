<template>
  <!--<h1>{{msg}}</h1>-->
  <ul>
    <li v-for="(item, index) in items" v-on:click="clickEvent(index)">
      <i class="el-icon-picture"></i>
      <span class="fl">{{ item.name }}</span>
      <span class="fr" style="font-size: 10px">{{ item.time }}</span>
    </li>
    <li @click="deleteEvent">delete</li>
  </ul>
</template>
<script>
  var items = [
  {img: '', name: 'Amy', time: '7月1日'},
  {img: '', name: 'John', time: '7月2日'},
  {img: '', name: 'Mike', time: '7月3日'},
  {img: '', name: 'Lucy', time: '7月4日'}
  ]

  export default {
    name: 'Wechat',
    data () {
      return {
//        msg: 'Welcome to Your Vue.js App'
        items: items
      }
    },
    methods: {
      clickEvent: function (i) {
        alert(i)
//        this.$http.get('api/!org/user/~query/Q_USER_MODPWD').then((response) => {
//          console.log(response)
//          console.log(this.$resource)
//        }, (response) => {
//          console.log(response.body)
//        })
        this.$axios.get('api/!org/user/~query/Q_USER_MODPWD').then((response) => {
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
      },
      deleteEvent: function () {
        console.log(1)
      }
    }
  }
</script>
<style scoped>
  ul{
    border-top: 0;
  }
  ul li{
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding:0 20px;
    border-bottom: 1px solid #eee;
  }
  .fr{
    float: right;
  }
</style>
