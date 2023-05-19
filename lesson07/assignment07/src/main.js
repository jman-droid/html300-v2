import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

