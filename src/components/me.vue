<template>
  <ul>
    <li v-for="item in items"> {{ item }} </li>
  </ul>
</template>
<script>
  export default {
    name: 'me',
    data () {
      return {
        items: ['钱包', '相册', '收藏']
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
</style>
