<template>
   <div>
     <div class="fixed-header">
       <Header />
       <navBar v-if="isNavBar" />
       <plistTitle v-if="isPlistTitle" />
       <singerTitle v-if="isSingeritle" />
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
import singerTitle from './singerTitle'

export default {
  components: {
    Header,
    appMain,
    navBar,
    plistTitle,
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
    isPlistTitle () {
      if (this.$route.meta.plistTitle && !this.$route.meta.singerTitle) {
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
  margin-top: 125px;
}
</style>
