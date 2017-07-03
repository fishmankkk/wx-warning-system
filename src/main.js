// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/store'
import router from './router'
import VueResource from 'vue-resource'
import { AlertPlugin } from 'vux'
import wx from 'weixin-js-sdk'

Vue.use(VueResource)
Vue.use(AlertPlugin)
Vue.use(Vuex)
Vue.use(wx)

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
