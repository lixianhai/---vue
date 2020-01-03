<template>
    <div>
        <div class="plist-wrap">
            <plistTitle :title="songInfo.songName"/>
        </div>
        <div class="panel-play">
            <div class="bg-overlay"></div>
            <div class="play-overlay"></div>
        </div>
        <div class="panel-play-bd">
            <div class="panel-play-img-box">
                <img src="../assets/logo_kugou.png">
            </div>
            <div class="panel-play-lrc-box">
                <div class="panel-play-lrc">
                    <p>贝斯：王家林</p>
                    <p>鼓手：啊飒飒s</p>
                </div>
            </div>
            <!-- <div class="time-wrap" id="timeWrap">
                <div class="timeshow" id="timeshow">00:04</div>
                <div class="progress-wrap" id="progressWrap">
                    <div class="progress-bar" id="progressBar">
                        <div class="preview-progress" id="previewProgress" style="width: 100%;"></div>
                        <div class="progress" id="progress" style="width: 1.4146%;"><span></span></div>
                    </div>
                </div>
                <div class="time" id="time">03:34</div>
            </div> -->
            <audio :src="songInfo.url" autoplay="" controls="" @ended="nextsong()">    </audio>
            <div class="play-operate">
                <svg-icon icon-class="prevSong"></svg-icon>
                <svg-icon icon-class="stop"></svg-icon>
                <svg-icon icon-class="nextSong"></svg-icon>
            </div>
            <div class="download-box">
                <svg-icon icon-class="download"></svg-icon>
                下载这首歌
            </div>
        </div>
    </div>
</template>

<script>
import plistTitle from '@/components/plistTitle'

export default {
  components: { plistTitle },
  computed: {
    songInfo () {
      return this.$store.state.songInfo
    }
  },
  created () {
    console.log(this.songInfo)
  },
  methods: {
    nextsong (aaa) {
      console.log(aaa)
    }
  }
}
</script>

<style lang="less" scoped>
.plist-wrap {
    position: fixed;
    top: 60px;
    width: 100%;
    z-index: 9999;
}
.panel-play {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    // visibility: hidden;
    overflow-y: auto;
    .bg-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('~@/assets/logo_kugou.png') no-repeat center center;
        background-size: cover;
        -webkit-filter: blur(15px);
        filter: blur(15px);
        // z-index: 9;
    }
    .play-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.6);
    }
}
.panel-play-bd {
    width: 100%;
    position: relative;
    z-index: 9998;
    padding-top: 65px;
    .panel-play-img-box {
        width: 200px;
        height: 200px;
        margin: 30px auto 0;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .panel-play-lrc-box {
        margin-top: 18px;
        height: 70px;
        overflow: hidden;
        text-align: center;
        color: #afabac;
        .panel-play-lrc {
            height: 65px;
            overflow: hidden;
            p {
                width: 100%;
                height: 35px;
                line-height: 35px;
                vertical-align: top;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
            }
            .curren {
                color: #d1c90e;
            }
        }
    }
    .time-wrap {
        width: 100%;
        padding: 14px 18px;
        display: box;
        display: -webkit-box;
        -webkit-box-flex: 1;
        -webkit-box-align: center;
        -webkit-box-pack: justify;
        -webkit-box-orient: horizontal;
        -webkit-box-sizing: border-box;
        box-flex: 1;
        box-align: center;
        box-pack: justify;
        box-orient: horizontal;
        box-sizing: border-box;
        .timeshow {
            font-size: 12px;
            color: #dcdcdc;
        }
        .progress-wrap {
            height: 3px;
            margin: 0 10px;
            background: #232228;
            position: relative;
            -webkit-box-flex: 1;
            box-flex: 1;
            z-index: 100;
            .progress-bar {
                width: 100%;
                height: 100%;
                .preview-progress, .progress {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 0;
                    height: 100%;
                }
                .preview-progress {
                    background: #6c6b70;
                }
                .progress {
                    background: #3195fd;
                    span {
                        position: absolute;
                        top: 5px;
                        right: -6px;
                        margin-top: -10px;
                        width: 12px;
                        height: 12px;
                        display: block;
                        background: #3195fd;
                        border-radius: 100%;
                    }
                }
            }
        }
        .time, .timeshow {
            font-size: 12px;
            color: #dcdcdc;
        }
    }
    .play-operate {
        margin: 0 auto;
        font-size: 0;
        text-align: center;
        .svg-icon {
            font-size: 50px;
            color: #fff;
        }
    }
}
.download-box {
    width: 56.25%;
    height: 50px;
    line-height: 50px;
    margin: 20px auto 0;
    text-align: center;
    color: #fff;
    background: #259ef7;
    font-size: 18px;
    border-radius: 5px;
}
</style>
