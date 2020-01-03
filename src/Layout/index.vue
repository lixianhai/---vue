<template>
   <div style="width:100%;height:100%;">
     <div class="fixed-header">
       <Header />
       <navBar v-if="isNavBar" />
       <singerTitle v-if="isSingeritle" />
     </div>
      <div class="mainApp" :style="{marginTop:marginTop}">
        <appMain />
      </div>
   </div>
</template>

<script>
import Header from './header'
import appMain from './appMain'
import navBar from './navBar'
import singerTitle from './singerTitle'

export default {
  components: {
    Header,
    appMain,
    navBar,
    singerTitle
  },
  computed: {
    isNavBar () {
      if (!this.$route.meta.plistTitle && !this.$route.meta.singerTitle) {
        return true
      } else {
        return false
      }
    },
    isSingeritle () {
      if (this.$route.meta.singerTitle) {
        return true
      } else {
        return false
      }
    },
    isGoPlay () {
      return this.$store.state.isGoPlay
    },
    marginTop () {
      if (this.$route.meta.keepAlive) {
        return '125px'
      } else {
        return '65px'
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
  z-index: 999999;
}
.mainApp {
  // margin-top: 125px;
  width: 100%;
  height: 100%;
}
</style>
