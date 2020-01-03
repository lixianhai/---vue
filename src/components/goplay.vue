<template>
    <div class="goplay-wrap">
        <router-link :to="{path: '/play/info'}" class="ft-left">
            <div class="img-wrap">
                <img :src="songInfo.imgUrl.split('{size}')[0] + '400' + songInfo.imgUrl.split('{size}')[1] ">
            </div>
            <div class="center-info">
                <p>{{ songInfo.singerName }}</p>
                <p>{{ songInfo.songName }}</p>
            </div>
        </router-link>
        <div class="ft-right">
            <svg-icon ref="loading" icon-class="loading"></svg-icon>
            <svg-icon icon-class="nextSong_1"></svg-icon>
            <svg-icon icon-class="download"></svg-icon>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    songInfo: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.goplay-wrap {
    position: fixed;
    bottom: 0;
    height: 75px;
    width: 100%;
    background: rgba(0,0,0,.9);
    .ft-left {
        width: 65%;
        height: 100%;
        float: left;
        .img-wrap {
            width: 67px;
            height: 67px;
            margin: 4px 10px 2px 4px;
            border-radius: 5px;
            overflow: hidden;
            display: inline-block;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .center-info {
            width: 65%;
            display: inline-block;
            vertical-align: top;
            margin-top: 15px;
            p:nth-child(1) {
                width: 100%;
                line-height: 1.7;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 16px;
                color: #fff;
            }
            p:nth-child(2) {
                line-height: 1.3;
                font-size: 14px;
                color: #888;
            }
        }
    }
    .ft-right {
        position: absolute;
        top: 25px;
        right: 10px;
        .svg-icon {
            padding: 0 10px;
            font-size: 20px;
            color: #fff;
            transition: 1s;
        }
    }
}
</style>
