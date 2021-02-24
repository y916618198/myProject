import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'

// 加载MpvueRouterPatch
Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
