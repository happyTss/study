<template>
  <div>
      <h2>Home组件</h2>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    props:["getHomeData"],
    data() {
      return {
        msg : "子组件Home"
      }
    },
    mounted() {
      this.getHomeData(this.msg)
    },
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  
</style>