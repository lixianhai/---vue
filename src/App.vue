<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route () {
      if (this.$router.isleft) {
        this.transitionName = 'slideleft'
      }
      if (this.$router.isright) {
        this.transitionName = 'slideright'
      }
    }
  }
}
</script>

<style>
html,#app,body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-X: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
