import Vuex from '@wepy/x';


export default new Vuex.Store({
  state: {
    token: '',
    name: '',
    pwd: ''

  },
  mutations: {
    setToken (state, payload) {
      state.token = payload.token
    }
  }
});
