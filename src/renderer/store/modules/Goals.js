import db from '../../datastore'

const state = {
  goals: []
}

const mutations = {
  INIT_GOALS (state, goals) {
    state.goals = goals
  },
  ADD_GOAL (state, goal) {
    state.goals.push(goal)
  },
  DELETE_GOAL (state, goalId) {
    state.goals.splice(state.goals.findIndex(goal => goal._id === goalId), 1)
  },
  UPDATE_GOAL_SINGLE_FIELD (state, data) {
    state.goals.find(goal => goal._id === data.id)[data.key] = data.newValue
  },
  UPDATE_GOAL (state, goal) {
    state.goals[state.goals.findIndex(oldGoal => oldGoal._id === goal._id)] = goal
  }
}

const actions = {
  fetchGoals ({ commit }) {
    db.goals.find({}, (err, goals) => {
      if (err) alert(err)
      commit('INIT_GOALS', goals)
    })
  },
  createNewGoal ({ commit }, goal) {
    return new Promise((resolve, reject) => {
      db.goals.insert(goal, (err, newGoal) => {
        if (err) reject(err)
        commit('ADD_GOAL', newGoal)
        resolve(newGoal)
      })
    })
  },
  updateGoalSingleField ({ commit }, data) {
    switch (data.key) {
      case 'specific':
        db.goals.update({ _id: data.id }, { $set: { specific: data.newValue } }, {}, (err) => {
          if (err) alert(err)
          commit('UPDATE_GOAL_SINGLE_FIELD', data)
        })
        break
      case 'relevant':
        db.goals.update({ _id: data.id }, { $set: { relevant: data.newValue } }, {}, (err) => {
          if (err) alert(err)
          commit('UPDATE_GOAL_SINGLE_FIELD', data)
        })
        break
      case 'achievables':
        db.goals.update({ _id: data.id }, { $set: { achievables: data.newValue } }, {}, (err) => {
          if (err) alert(err)
          commit('UPDATE_GOAL_SINGLE_FIELD', data)
        })
        break
      case 'measurables':
        db.goals.update({ _id: data.id }, { $set: { measurables: data.newValue } }, {}, (err) => {
          if (err) alert(err)
          commit('UPDATE_GOAL_SINGLE_FIELD', data)
        })
        break
    }
  },
  deleteGoal ({ commit }, goalId) {
    db.goals.remove({ _id: goalId }, {}, (err) => {
      if (err) alert(err)
      commit('DELETE_GOAL', goalId)
    })
  }
}

const getters = {
  goalById: (state) => (id) => {
    return state.goals.find(goal => goal._id === id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
