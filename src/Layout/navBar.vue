<template>
    <mt-navbar v-model="selected" class="nav-wrap">
        <mt-tab-item id="1">
            <router-link :to="{path: '/'}">新歌</router-link>
        </mt-tab-item>
        <mt-tab-item id="2">
            <router-link :to="{path: '/rank'}">排行</router-link>
        </mt-tab-item>
        <mt-tab-item id="3">
            <router-link :to="{path: '/plist'}">歌单</router-link>
        </mt-tab-item>
        <mt-tab-item id="4">
            <router-link :to="{path: '/singer'}">歌手</router-link>
        </mt-tab-item>
    </mt-navbar>
</template>

<script>
export default {
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style scoped lang="less">
.mint-navbar {
    height: 65px;
    padding: 0 15px;
    li {
        height: 100%;
        line-height: 65px;
    }
}
</style>
