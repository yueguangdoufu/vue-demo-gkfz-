import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入echarts
import echarts from 'echarts'

import axios from 'axios'
import store from './store'

Vue.prototype.$echarts = echarts
// 配置请求的根路径
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8081/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
