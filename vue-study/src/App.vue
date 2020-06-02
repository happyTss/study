<template>
  <div id="app">
    <h1>App组件</h1>
    <p>{{num}}</p>
    <p>{{ a = 1}}</p>
    <p>{{1}}</p>
    <hr>
  <input type="tel" name="" id="">
  <input type="number" name="" id="">

    <Home :getHomeData = "getHomeData" />
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  components:{
    Home
  },
  data() {
    return {
      msg :"这是一个Vue页面",
      num:1
    }
  },

  methods: {
    getHomeData(data){
      console.log("Home组件数据",data)
    }
  },
  //Vue生命周期   C M U D
  beforeCreate() {
    console.log("--------- beforeCreate --------")
    console.log(this)
    console.log(this.$el)
  },
  created() {
    console.log("--------- created --------")
    console.log(this)
    console.log(this.$el)
  },
  beforeMount() {
    console.log("--------- beforeMount --------")
    console.log(this)
    console.log(this.$el)
  },
  mounted() {
    console.log("--------- mounted --------")
    console.log(this)
    console.log(this.$el)
    const timer = setInterval(() => {
      this.num += 1
      console.log('setInterval')
    }, 1000);

    setTimeout(() => {
      this.$destroy()
    }, 3000);
    this.$once('hook:beforeDestroy', () => {            
      clearInterval(timer);    
      // timer = null                                
    })
  },
  beforeUpdate() {
    console.log("--------- beforeUpdate --------")
    console.log(this)
    console.log(this.$el)
    
  },
  updated() {
    console.log("--------- updated --------")
    
  },
  beforeDestroy() {
    console.log("--------- beforeDestroy --------")
    // clearInterval(this.IntervealId)
    
  },
  destroyed() {
    console.log("--------- destroyed --------")
    
  },

}
</script>

<style>

</style>
