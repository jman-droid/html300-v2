import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/HomeContent.vue'
import FluidImage from '../pages/FluidImage.vue'
import GridBoot from '../pages/GridBoot.vue'
import AccordionContent from '../pages/Accordion.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fluid',
    name: 'fluid',
    component: FluidImage
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridBoot
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: AccordionContent
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router