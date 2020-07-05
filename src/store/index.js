import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

export const storeConfig = {
  state: {
    count: 0
  },
  mutations,
  getters,
  actions: {},
  modules: {}
}

export default new Vuex.Store(storeConfig)
