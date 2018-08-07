import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedFoods: '',
    textarea: '',
    imgarea: null,
    musicarr: null,
    textarr: null
  },
  mutations: {
    selectedFoods (state, data) {
      state.selectedFoods = data
    },
    textarea (state, data) {
      state.textarea = data
    },
    imgarea (state, data) {
      state.imgarea = data
    },
    musicarr (state, data) {
      state.musicarr = data
    },
    textarr (state, data) {
      state.textarr = data
    }
  },
  actions: {
    setSelectedFoods ({ commit, state }, data) {
      let oldData = state.selectedFoods
      let status = oldData.some(item => item.id == data.id)
      if (!status) {
        oldData.push(data)
      } else {
        let index = oldData.findIndex(item => item.id == data.id)
        let copyData = JSON.parse(JSON.stringify(oldData))
        copyData[index].number = data.number
        copyData = copyData.filter(item => item.number)

        oldData = copyData
      }     
      commit('selectedFoods', oldData)
    },
    setTextarea ({ commit, state }, data) {
      commit('textarea', data)
    },
    setImgarea ({ commit, state }, data) {
      commit('imgarea', data)
    },
    setMusicarr ({ commit, state }, data) {
      commit('musicarr', data)
    },
    setTextarr ({ commit, state }, data) {
      commit('textarr', data)
    }
  }
})

export default store
