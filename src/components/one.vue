<template>
  <div>
    <span class="fl">{{msg}}</span>
    <span class="fr">+</span>
    <span class="fr">@</span>
  </div>
</template>
<script>
  export default {
    name: 'one',
    data () {
      return {
        msg: '微信'
      }
    }
  }
</script>
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
</style>
