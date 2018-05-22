import db from '../../datastore'

// Default settings
const state = {
  settings: {
    todoistToken: ''
  }
}

const mutations = {
  INIT_SETTINGS (state, settings) {
    state.settings = { ...state.settings, ...settings }
  }
}

const actions = {
  fetchSettings ({ commit }) {
    db.settings.find({}, (err, settings) => {
      if (err) alert(err)
      commit('INIT_SETTINGS', settings)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}
