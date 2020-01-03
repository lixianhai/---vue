<template>
    <ul class="content-wrap">
        <li v-for="item in singerListData" :key="item.classid" class="singer-list-wra">
            <router-link :to="{path: ''}">
                <img src="@/assets/arrow_icon.png">
                {{ item.classname }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import { getSingList } from '@/api/singer'

export default {
  data () {
    return {
      singerListData: []
    }
  },
  created () {
    this.getSingList()
  },
  methods: {
    getSingList () {
      getSingList({specialid: 125032}).then((data) => {
        console.log('歌手list', data)
        this.singerListData = data.list
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content-wrap {
    margin: 20px 10px;
    background: #fbfbfb;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    .singer-list-wra {
        padding: 15px;
        display: block;
        font-size: 18px;
        border-top: 1px solid #e4e4e4;
        position: relative;
        &:nth-child(1) {
            border-top: 0;
        }
        img {
            width: 10px;
            height: 18px;
            position: absolute;
            right: 15px;
            top: 33%;
        }
        a {
            color: #333;
        }
    }
}

</style>
