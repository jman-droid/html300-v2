import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import NavBar from '@/components/NavBar'
// import Accordian from '@/components/Accordian'
// import FluidImage from '@/components/FluidImages'
// import GridBoot from '@/components/GridBoot'
// import NavBar from '@/components/NavBar'






Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  router,
  // components: {App, NavBar, Accordion, Heading, },
  render: h => h(App)
}).$mount('#app')


