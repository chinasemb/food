import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerName:'/'
  },
  mutations: {
    setRouterName(state, payload) {
      state.routerName = payload
    }
  },
  actions: {

  }
})
