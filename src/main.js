import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/css/style.css'
import BaiduMap from 'vue-baidu-map'

// 导入elememt-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入 axios
import axios from 'axios'
// 导入mock
import mock from './mock/mock.js'
Vue.prototype.$http = axios;


Vue.use(ElementUI);



Vue.config.productionTip = false

// 配置标题
Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'o8ECYa0tGm58DGTwR3UnnuKnKhu5KvoP'
})

new Vue({
  router,
  store,
  mock,
  render: h => h(App)
}).$mount('#app')
