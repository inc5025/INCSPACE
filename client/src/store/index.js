import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['x-access-token'] = `${accessToken}`;
}
enhanceAccessToeken()

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated (state) {
      state.accessToken = state.accessToken || localStorage.accessToken;
      return state.accessToken;
    }
  },
  mutations: {
    LOGIN (state, accessToken) {
      axios.post('/auth/login', accessToken)
      .then(({data}) => {
          console.log(data);
          axios.defaults.headers.common['x-access-token'] = `${data.token}`;
          state.accessToken = data.token;
          localStorage.accessToken = data.token;
        });
    },
    LOGOUT (state) {
      axios.defaults.headers.common['x-access-token'] = undefined;
      state.accessToken = null;
      delete localStorage.accessToken;
    }
  },
  actions: {

  }
})