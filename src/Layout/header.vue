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
.header-wrap {
    width: 100%;
    height: 65px;
    background: #2ca2f9;
    ul {
        padding: 0 15px;
        li {
            float: left;
            height: 100%;
            line-height: 100%;
            // padding: 0 10px;
            &:last-child {
                float: right;
            }
            .logo {
                width: 145px;
                height: 33px;
                display: block;
                background: url('~@/assets/logo.png');
                background-size: 100% 100%;
                margin-top: 15px;
            }
            .search {
                width: 25px;
                height: 25px;
                display: block;
                background: url('~@/assets/search.png');
                background-size: 100% 100%;
                float: right;
                margin-top: 18px;
            }
        }
    }
}
</style>
