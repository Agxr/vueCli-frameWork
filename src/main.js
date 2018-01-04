// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index' // 引入store

import { Header, Button, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 挂载store
  template: '<App/>',
  components: { App }
})
