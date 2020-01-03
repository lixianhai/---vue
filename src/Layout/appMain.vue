<template>
    <section class="app-main">
        <transition>
            <keep-alive :include="key">
                <router-view :key="key"></router-view>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
  data () {
    return {
      alive: ['newSong', 'rankList', 'plistIndex', 'singerIndex']
    }
  },
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
.app-main {
    width: 100%;
    height: 100%;
}
</style>
