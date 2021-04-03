import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/css/style.css'

// 导入 axios
import axios from 'axios'
Vue.prototype.$http = axios;

// 导入elememt-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入mock
import mock from './mock/mock.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mock,
  render: h => h(App)
}).$mount('#app')
