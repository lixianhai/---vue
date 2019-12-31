<template>
   <div style="overflow:hidden">
     <div class="fixed-header">
       <Header />
       <navBar v-if="isNavBar" />
       <plistTitle v-if="isPlistTitle" />
     </div>
      <div class="mainApp">
        <appMain />
      </div>
   </div>
</template>

<script>
import Header from './header'
import appMain from './appMain'
import navBar from './navBar'
import plistTitle from './plistTitle'

export default {
  components: {
    Header,
    appMain,
    navBar,
    plistTitle
  },
  watch: {
    $route (val, newval) {
      console.log(val.meta.singerTitle || val.meta.plistTitle)
    }
  },
  computed: {
    isNavBar () {
      if (!this.$route.meta.plistTitle && !this.$route.meta.singerTitle) {
        return true
      } else {
        return false
      }
    },
    isPlistTitle () {
      if (this.$route.meta.plistTitle && !this.$route.meta.singerTitle) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="less">
.fixed-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.mainApp {
  margin-top: 125px;
}
</style>
