<template>
    <ul>
        <li
            v-for="item in rankListData"
            :key="item.id"
            @click="getRankInfo(item)"
        >
            <router-link :to="{path: ''}" class="rank-list-wrap">
                <div class="img-wrap">
                    <img :src="item.imgurl.split('{size}')[0] + '400' + item.imgurl.split('{size}')[1] ">
                </div>
                <div class="rank-name">
                    <p>{{ item.rankname }}</p>
                </div>
                <div class="icon">
                    <img src="@/assets/arrow_icon.png">
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
import { getRankList, getRankInfo } from '@/api/rank'

export default {
  data () {
    return {
      rankListData: []
    }
  },
  created () {
    this.getRankList()
  },
  methods: {
    getRankList () {
      getRankList().then((data) => {
        this.rankListData = data.rank.list
      })
    },
    getRankInfo (item) {
      let params = {
        rankid: item.rankid,
        page: 1,
        json: true
      }
      getRankInfo(params).then((data) => {
        console.log('排行info', data)
        this.$router.push({path: '/rank/info', query: data})
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
        min-height: 100px;
        line-height: 100px;
        display: block;
        font-size: 20px;
        color: #333;
    }
    .icon {
        position: absolute;
        top: 43%;
        right: 5px;
        width: 30px;
        height: 100%;
        text-align: center;
        display: block;
        img {
            width: 10px;
            height: 18px;
        }
    }
}
</style>
