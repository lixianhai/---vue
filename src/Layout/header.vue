<template>
    <div class="header-wrap">
        <ul>
            <li><router-link :to="{path: '/'}" class="logo"></router-link></li>
            <li></li>
            <li><router-link :to="{path: '/'}" class="search"></router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">

</style>
