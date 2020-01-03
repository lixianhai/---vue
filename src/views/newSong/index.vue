<template>
    <div>
        <div class="swipe-wrap">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="http://m.kugou.com/v3/static/images/index/banner.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190731/20190731234643631589.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190731/20190731234809940554.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190424/20190424173959270418.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190731/20190731234904119937.jpg"></mt-swipe-item>
            </mt-swipe>
            <ul class="song-list-wrap">
                <li
                    v-for="item in songData"
                    :key="item.album_id"
                    @click="getSongInfo(item)"
                >
                    <div class="singerName"><span>{{ item.filename }}</span></div>
                    <div class="icon">
                        <img src="@/assets/download_icon_2.png">
                    </div>
                </li>
            </ul>
        </div>
        <goPlay :songInfo="songInfo" v-if="isGoPlay" />
    </div>
</template>

<script>
import { getNewSongList, getSongInfo } from '@/api/newSong'
import goPlay from '@/components/goplay'
import axios from 'axios'

export default {
  components: { goPlay },
  data () {
    return {
      songData: [],
      songInfo: {}
    }
  },
  computed: {
    isGoPlay () {
      return this.$store.state.isGoPlay
    }
  },
  created () {
    this.getNewSongList()
    axios.get('https://m.kugou.com/?json=true').then(data => {
      console.log(data)
    })
  },
  methods: {
    getNewSongList () {
      getNewSongList().then((data) => {
        this.songData = data.data
        console.log(data)
      })
    },
    getSongInfo (item) {
      let params = {
        cmd: 'playInfo',
        hash: item.hash
      }
      getSongInfo(params).then((data) => {
        this.songInfo = data
        this.$store.dispatch('setGoPlay', true)
        this.$store.dispatch('setSongInfo', data)
      })
    }
  }
}
</script>

<style  lang="less" scoped>
.swipe-wrap {
    height: 170px;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    .mint-swipe-indicators {
        bottom: 0px;
        .mint-swipe-indicator {
            width: 12px;
            height: 12px;
            background: #eee;
            opacity: .7;
        }
        .is-active {
            background: #fff;
            opacity: 1;
        }
    }
}
.song-list-wrap {
    padding-left: 15px;
    width: 100%;
    li {
        width: calc(100% - 15px);
        height: 80px;
        border-bottom: 1px solid #e5e5e5;
        display: table;
        position: relative;
        .singerName {
            width: 100%;
            display: table-cell;
            padding-left: 10px;
            padding-right: 60px;
            font-size: 18px;
            vertical-align: middle;
        }
        .icon {
            position: absolute;
            top: 37%;
            right: 15px;
            width: 20px;
            height: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
