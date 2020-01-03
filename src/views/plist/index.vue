<template>
    <ul>
        <li
            v-for="item in pListData"
            :key="item.global_specialid"
        >
            <router-link :to="{path: ''}" class="rank-list-wrap">
                <div class="img-wrap">
                    <img :src="item.imgurl.split('{size}')[0] + '400' + item.imgurl.split('{size}')[1] ">
                </div>
                <div class="rank-name">
                    <p>{{ item.specialname }}</p>
                    <p><svg-icon icon-class="headset" />{{ item.playcount }}</p>
                </div>
                <div class="icon">
                    <img src="@/assets/arrow_icon.png">
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
import { getPList } from '@/api/plist'

export default {
  data () {
    return {
      pListData: []
    }
  },
  created () {
    this.getPList()
  },
  methods: {
    getPList () {
      getPList({specialid: 125032}).then((data) => {
        console.log('歌单list', data)
        this.pListData = data.plist.list.info
      })
    }
  }
}
</script>

<style lang="less" scoped>
.rank-list-wrap {
  margin-left: 15px;
  padding: 10px 30px 10px 115px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  display: block;
  box-sizing: border-box;
  .img-wrap {
    position: absolute;
    top: 8%;
    left: 0;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rank-name {
    min-height: 102px;
    line-height: 1.5;
    font-size: 16px;
    color: #333;
    p:nth-child(1) {
      padding-top: 25px;
    }
    p:nth-child(2) {
      color: #9b9b9b;
      font-size: 14px;
      .svg-icon {
        font-size: 12px;
        margin-right: 5px;
        vertical-align: top;
        margin-top: 4px;
      }
    }
  }
  .icon {
    position: absolute;
    top: 0%;
    right: 5px;
    width: 30px;
    height: 100%;
    text-align: center;
    display: block;
    img {
      position: absolute;
      top: 50%;
      width: 10px;
      height: 18px;
      margin: -8px;
    }
  }
}
</style>
