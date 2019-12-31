<template>
    <div>
        <ul>
            <li><router-link :to="{path: '/'}">新歌</router-link></li>
            <li><router-link :to="{path: '/rank'}">排行</router-link></li>
            <li><router-link :to="{path: '/plist'}">歌单</router-link></li>
            <li><router-link :to="{path: '/singer'}">歌手</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
  ul {
      display: flex;
  }
  li {
      padding: 0 20px;
  }
</style>
