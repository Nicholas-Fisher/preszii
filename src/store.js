import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lunchData: {}
  },
  mutations: {
    setLunchData(state, payload) { state.lunchData = payload; },
  },
});
