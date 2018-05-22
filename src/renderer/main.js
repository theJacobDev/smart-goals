import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import 'vue-awesome/icons'
import ElementUi from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueMoment from 'vue-moment'

import App from './App'
import router from './router'
import store from './store'
import db from './datastore'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.use(ElementUi, { locale })
Vue.use(VueMoment)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
