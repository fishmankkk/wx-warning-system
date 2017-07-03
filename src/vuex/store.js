import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: localStorage.getItem('user')
  },
  mutations: {
    updateData (state, message) {
      state.personData = message
    }
  }
})

export default store
