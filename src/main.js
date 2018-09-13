import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Axios from 'axios'
import Router from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Axios)
Vue.use(Router)
Vue.prototype.https = Axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
