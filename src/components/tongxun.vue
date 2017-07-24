<template>
  <ul>
    <li v-for="item in items"> {{ item }} </li>
  </ul>
</template>
<script>
  export default {
    name: 'tongxun',
    data () {
      return {
        items: ['Amy', 'Mike', 'John', 'Lily']
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
