import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputData: null
  },
  mutations: {
    setInputData(state, data) {
      state.inputData = data;
    }
  },
  actions: {
    updateInputData({ commit }, data) {
      commit('setInputData', data);
    }
  },
  getters: {
    getInputData(state) {
      return state.inputData;
    }
  }
});
