import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import '@wangeditor/editor/dist/css/style.css'
import router from './router'
import store from './store'
import '../theme/index.css'
import './assets/reset.css'
import axios from "axios";
import request from "@/utils/request";
//axios.defaults.withCredentials=true;
//Vue.prototype.axios=axios
//axios.defaults.baseURL='/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.request=request
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
