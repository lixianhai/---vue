<template>
    <div >
        <plistTitle :title="classInfo.rankname" style="height:100%;" class="plist-title"/>
        <div class="img-wrap">
            <img :src="classInfo.imgurl.split('{size}')[0] + '400' + classInfo.imgurl.split('{size}')[1] ">
            <div class="rank-info-time">
                <span>上次更新时间：2020-01-01</span>
            </div>
        </div>
        <ul class="rank-list-wrap">
            <li
                v-for="item in rankInfo"
                :key="item.hash"
            >
                <div class="file-name"><span>{{ item.filename }}</span></div>
                <div class="icon"><img src="@/assets/download_icon_2.png"></div>
                <span class="index">{{ item.index }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import plistTitle from '@/components/plistTitle'

export default {
  components: { plistTitle },
  data () {
    return {
      classInfo: {},
      rankInfo: []
    }
  },
  created () {
    console.log(this.$route.query, 'aaaaaaaaaaaaaaa')
    for (var i = 0; i < this.$route.query.songs.list.length; i++) {
      this.$route.query.songs.list[i].index = i + 1
    }
    this.classInfo = this.$route.query.info
    this.rankInfo = this.$route.query.songs.list
  }
}
</script>

<style lang="less" scoped>
.plist-title {
    width: 100%!important;
    height: 66px!important;
    position: fixed!important;
    top: 59px;
    z-index: 999;
}
.img-wrap {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
    .rank-info-time {
        position: absolute;
        width: 100%;
        height: 55px;
        line-height: 55px;
        background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
        left: 0;
        bottom: 0;
        color: #fafff2;
        font-size: 14px;
        padding-left: 20px;
    }
    img {
        width: 100%;
        margin-top: -65px;
    }
}
.rank-list-wrap {
    padding-left: 15px;
    li {
        width: 100%;
        height: 82px;
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        display: table;
        .file-name {
            width: 100%;
            display: table-cell;
            vertical-align: middle;
            cursor: pointer;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 40px;
            padding-right: 50px;
            span {
                font-size: 16px;
                color: #333;
            }
        }
        .icon {
            position: absolute;
            top: 37%;
            right: 15px;
            width: 20px;
            height: 20px;
            cursor: pointer;
            text-align: center;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .index {
            padding: 0 10px;
            height: 20px;
            line-height: 20px;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 0;
            margin-top: -10px;
            text-align: center;
            font-size: 14px;
            color: #999;
            display: inline-block;
        }
        &:nth-child(1) .index {
            background: #e80000;
            color: #fff;
        }
        &:nth-child(2) .index {
            background: #ff7200;
            color: #fff;
        }
        &:nth-child(3) .index {
            background: #f8b300;
            color: #fff;
        }
    }
}
</style>
