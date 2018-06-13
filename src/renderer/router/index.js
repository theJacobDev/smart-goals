import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ROUTES = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('@/components/Dashboard').default
  },
  {
    path: '/create-goal',
    name: 'create-goal',
    component: require('@/components/CreateGoal').default
  },
  {
    path: '/goals',
    name: 'goals',
    component: require('@/components/GoalsList').default
  },
  {
    path: '/goal/:id',
    name: 'goal',
    component: require('@/components/Goal').default
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('@/components/Settings').default
  },
  {
    path: '*',
    redirect: '/dashboard'
  }
]

export default new Router({
  routes: ROUTES
})
