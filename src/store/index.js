import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    songInfo: {},
    isGoPlay: false
  },
  mutations: {
    SET_GOPLAY (state, isPlay) {
      state.isGoPlay = isPlay
    },
    SET_SONG_INFO (state, data) {
      console.log(data)
      state.songInfo = data
    }
  },
  actions: {
    setGoPlay (state, isPlay) {
      return new Promise((resolve, reject) => {
        store.commit('SET_GOPLAY', isPlay)
        resolve()
      })
    },
    setSongInfo (state, data) {
      return new Promise((resolve, reject) => {
        store.commit('SET_SONG_INFO', data)
        resolve()
      })
    }
  }
})

export default store
