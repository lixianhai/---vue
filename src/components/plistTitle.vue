<template>
    <div class="plistTitle-wrap">
        <svg-icon icon-class="left-arrow"></svg-icon>
        {{ this.title }}
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  created () {
    console.log(this.title)
  }
}
</script>

<style lang="less" scoped>
.plistTitle-wrap {
    width: 100%;
    line-height: 60px;
    background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
    padding: 0 40px;
    position: relative;
    text-align: center;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 18px;
    z-index: 9999;
    .svg-icon {
        position: absolute;
        top: 28%;
        left: 20px;
        font-size: 22px;
    }
}
</style>
